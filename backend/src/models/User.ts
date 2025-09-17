import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database';
import bcrypt from 'bcrypt';

// User attributes interface
interface UserAttributes {
  id: string;
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  profileImage?: string;
  profileImageFileId?: string;
  isAdmin?: boolean;
  isLocked?: boolean;
  isEmailVerified?: boolean;
  emailVerificationToken?: string | null;
  emailVerificationExpires?: Date | null;
  resetPasswordToken?: string | null;
  resetPasswordExpires?: Date | null;
  failedLoginAttempts?: number;
  lastFailedLoginAt?: Date | null;
  lockoutUntil?: Date | null;
  neonAuthId?: string | null;
  neonAuthData?: any;
  createdAt: Date;
  updatedAt: Date;
}

// User creation attributes interface (optional fields during creation)
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'createdAt' | 'updatedAt' | 'isAdmin' | 'failedLoginAttempts' | 'lastFailedLoginAt' | 'lockoutUntil'> {}

// User model class
class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public username!: string;
  public name!: string;
  public email!: string;
  public password!: string;
  public role!: string;
  public profileImage?: string;
  public isAdmin?: boolean;
  public isLocked?: boolean;
  public isEmailVerified?: boolean;
  public emailVerificationToken?: string | null;
  public emailVerificationExpires?: Date | null;
  public resetPasswordToken?: string | null;
  public resetPasswordExpires?: Date | null;
  public failedLoginAttempts?: number;
  public lastFailedLoginAt?: Date | null;
  public lockoutUntil?: Date | null;
  public neonAuthId?: string | null;
  public neonAuthData?: any;
  public createdAt!: Date;
  public updatedAt!: Date;

  // Method to check if password matches
  public async comparePassword(candidatePassword: string): Promise<boolean> {
    return bcrypt.compare(candidatePassword, this.password);
  }
}

// Initialize User model
User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        len: [3, 30],
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [6, 100],
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'user',
      validate: {
        isIn: [['user', 'admin']],
      },
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profileImageFileId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
    emailVerificationToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    emailVerificationExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    resetPasswordToken: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    resetPasswordExpires: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    failedLoginAttempts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    lastFailedLoginAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    lockoutUntil: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    neonAuthId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    neonAuthData: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    hooks: {
      // Hash password before saving
      beforeCreate: async (user: User) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      // Hash password before updating if changed
      beforeUpdate: async (user: User) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

export default User;