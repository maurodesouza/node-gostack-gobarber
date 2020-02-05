import { model, Schema } from 'mongoose';

const NotificationSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Number,
      required: true,
    },
    read: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Notification = model('Notification', NotificationSchema);

export default Notification;
