import React from "react";
import { Flag, Users, Landmark, Heart } from "lucide-react";

export const corePhilosophies = [
  {
    icon: <Flag className="w-12 h-12" />,
    title: "Việt Nam là quốc gia nhiều tôn giáo",
    subtitle: "Bức tranh tổng quan",
    description:
      "Đời sống tôn giáo nước ta phong phú về số lượng tổ chức, hệ phái và hình thức sinh hoạt, phản ánh sự đa dạng trong nhu cầu tâm linh của nhân dân.",
    principles: [
      "Có cả tôn giáo du nhập và tôn giáo nội sinh",
      "43 tổ chức thuộc 16 tôn giáo đã được công nhận",
      "Hơn 29.000 cơ sở thờ tự đang hoạt động",
    ],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Đa dạng nhưng hòa hợp",
    subtitle: "Đặc điểm nổi bật",
    description:
      "Các tôn giáo ở Việt Nam đan xen trên nhiều địa bàn, cùng tồn tại hòa bình, tôn trọng lẫn nhau và chưa từng xảy ra chiến tranh tôn giáo.",
    principles: [
      "Đa dạng nguồn gốc và truyền thống lịch sử",
      "Chung sống hòa bình, không xung đột tôn giáo",
      "Mỗi tôn giáo đều mang dấu ấn văn hóa Việt Nam",
    ],
  },
  {
    icon: <Landmark className="w-12 h-12" />,
    title: "Tự do tín ngưỡng trong khuôn khổ pháp luật",
    subtitle: "Chính sách nhất quán",
    description:
      "Đảng và Nhà nước tôn trọng, bảo đảm quyền theo hoặc không theo tôn giáo, đồng thời yêu cầu mọi hoạt động tôn giáo phải bình đẳng và tuân thủ pháp luật.",
    principles: [
      "Bảo đảm quyền tự do tín ngưỡng, tôn giáo",
      "Các tôn giáo bình đẳng trước pháp luật",
      "Nghiêm cấm lợi dụng tôn giáo để vi phạm pháp luật",
    ],
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Công tác tôn giáo là công tác quần chúng",
    subtitle: "Hướng vào đoàn kết và phát triển",
    description:
      "Làm tốt công tác tôn giáo là phát huy khối đại đoàn kết dân tộc, nâng cao đời sống đồng bào có đạo và ngăn chặn mọi âm mưu lợi dụng tôn giáo chống phá đất nước.",
    principles: [
      "Nội dung cốt lõi là vận động quần chúng",
      "Là trách nhiệm của cả hệ thống chính trị",
      "Gắn phát triển xã hội với quản lý nhà nước",
    ],
  },
];
