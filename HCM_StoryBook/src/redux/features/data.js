export const DATASET_VERSION = 10;

const createQuestion = ({
  id,
  term,
  definition,
  question,
  options,
  correct,
  fillAnswer,
  answer,
  fullFillAnswer,
}) => ({
  id,
  term,
  definition,
  quiz: {
    question,
    options,
    correct,
  },
  fillAnswer,
  answer,
  fullFillAnswer,
});

export const chapters = [
  {
    id: 110021,
    title: "Phần 1: Đặc điểm tôn giáo ở Việt Nam",
    description: "Các đặc điểm cơ bản của tôn giáo ở Việt Nam",
    icon: "⛪",
    questions: [
      createQuestion({
        id: 1,
        term: "Việt Nam là quốc gia có nhiều tôn giáo",
        definition:
          "Một đặc điểm nổi bật là Việt Nam có nhiều tôn giáo cùng tồn tại.",
        question:
          "Theo nội dung học tập, đặc điểm nào phản ánh đúng đời sống tôn giáo ở Việt Nam?",
        options: [
          "Chỉ có một tôn giáo duy nhất",
          "Không có tôn giáo",
          "Có nhiều tôn giáo cùng tồn tại",
          "Mọi tôn giáo đều giống nhau hoàn toàn",
        ],
        correct: 2,
        fillAnswer: "Việt Nam là một quốc gia có ______ cùng tồn tại.",
        answer: "nhiều tôn giáo",
        fullFillAnswer:
          "Một đặc điểm cơ bản của Việt Nam là có nhiều tôn giáo cùng tồn tại trong đời sống xã hội.",
      }),
      createQuestion({
        id: 2,
        term: "43 tổ chức thuộc 16 tôn giáo",
        definition:
          "Hiện nay nước ta có 43 tổ chức thuộc 16 tôn giáo đã được công nhận và cấp đăng ký hoạt động.",
        question:
          "Hiện nay Việt Nam có bao nhiêu tổ chức thuộc bao nhiêu tôn giáo đã được công nhận và cấp đăng ký hoạt động?",
        options: [
          "16 tổ chức thuộc 43 tôn giáo",
          "43 tổ chức thuộc 16 tôn giáo",
          "57 tổ chức thuộc 16 tôn giáo",
          "29 tổ chức thuộc 43 tôn giáo",
        ],
        correct: 1,
        fillAnswer:
          "Hiện nay nước ta có ______ đã được công nhận và cấp đăng ký hoạt động.",
        answer: "43 tổ chức thuộc 16 tôn giáo",
        fullFillAnswer:
          "Theo nội dung bài học, hiện nay nước ta có 43 tổ chức thuộc 16 tôn giáo đã được công nhận và cấp đăng ký hoạt động.",
      }),
      createQuestion({
        id: 3,
        term: "Số lượng chức sắc tôn giáo",
        definition: "Việt Nam hiện có khoảng 57.000 chức sắc tôn giáo.",
        question:
          "Theo số liệu nêu trong bài học, nước ta hiện có khoảng bao nhiêu chức sắc tôn giáo?",
        options: ["29.000", "57.000", "157.000", "43.000"],
        correct: 1,
        fillAnswer: "Nước ta hiện có khoảng ______ chức sắc tôn giáo.",
        answer: "57.000",
        fullFillAnswer:
          "Theo nội dung học tập, nước ta hiện có khoảng 57.000 chức sắc tôn giáo.",
      }),
      createQuestion({
        id: 4,
        term: "Số lượng chức việc tôn giáo",
        definition: "Việt Nam hiện có khoảng 157.000 chức việc tôn giáo.",
        question:
          "Theo nội dung bài học, nước ta hiện có khoảng bao nhiêu chức việc tôn giáo?",
        options: ["57.000", "29.000", "157.000", "16.000"],
        correct: 2,
        fillAnswer: "Nước ta hiện có khoảng ______ chức việc tôn giáo.",
        answer: "157.000",
        fullFillAnswer:
          "Theo số liệu trong bài, nước ta hiện có khoảng 157.000 chức việc tôn giáo.",
      }),
      createQuestion({
        id: 5,
        term: "Số lượng cơ sở thờ tự",
        definition: "Việt Nam có hơn 29.000 cơ sở thờ tự.",
        question: "Hiện nay nước ta có hơn bao nhiêu cơ sở thờ tự?",
        options: ["16.000", "29.000", "57.000", "157.000"],
        correct: 1,
        fillAnswer: "Nước ta hiện có hơn ______ cơ sở thờ tự.",
        answer: "29.000",
        fullFillAnswer:
          "Một số liệu quan trọng trong bài là Việt Nam hiện có hơn 29.000 cơ sở thờ tự.",
      }),
      createQuestion({
        id: 6,
        term: "Tôn giáo du nhập",
        definition:
          "Ở Việt Nam có những tôn giáo du nhập từ bên ngoài vào các thời điểm và hoàn cảnh khác nhau.",
        question:
          "Nhóm nào sau đây thuộc các tôn giáo du nhập từ bên ngoài vào Việt Nam?",
        options: [
          "Cao Đài, Hòa Hảo",
          "Phật giáo, Công giáo, Tin Lành, Hồi giáo",
          "Chỉ Cao Đài",
          "Chỉ Hòa Hảo",
        ],
        correct: 1,
        fillAnswer:
          "Các tôn giáo như Phật giáo, Công giáo, Tin Lành, Hồi giáo là các tôn giáo ______.",
        answer: "du nhập từ bên ngoài",
        fullFillAnswer:
          "Phật giáo, Công giáo, Tin Lành và Hồi giáo là những tôn giáo du nhập từ bên ngoài vào Việt Nam.",
      }),
      createQuestion({
        id: 7,
        term: "Tôn giáo nội sinh",
        definition:
          "Ở Việt Nam có những tôn giáo hình thành trong nước, gọi là tôn giáo nội sinh.",
        question: "Nhóm nào sau đây là các tôn giáo nội sinh của Việt Nam?",
        options: [
          "Cao Đài, Hòa Hảo",
          "Phật giáo, Công giáo",
          "Tin Lành, Hồi giáo",
          "Phật giáo, Cao Đài",
        ],
        correct: 0,
        fillAnswer: "Cao Đài và Hòa Hảo là các tôn giáo ______ ở Việt Nam.",
        answer: "nội sinh",
        fullFillAnswer:
          "Cao Đài và Hòa Hảo là các tôn giáo nội sinh, tức là hình thành trong nước.",
      }),
      createQuestion({
        id: 8,
        term: "Đa dạng về nguồn gốc và truyền thống lịch sử",
        definition:
          "Các tôn giáo ở Việt Nam rất đa dạng về nguồn gốc và truyền thống lịch sử.",
        question:
          "Đặc điểm nào phản ánh sự phong phú của đời sống tôn giáo Việt Nam?",
        options: [
          "Các tôn giáo đều có cùng một nguồn gốc",
          "Các tôn giáo đa dạng về nguồn gốc và truyền thống lịch sử",
          "Mọi tôn giáo xuất hiện cùng một thời điểm",
          "Mọi tôn giáo có giáo lý hoàn toàn giống nhau",
        ],
        correct: 1,
        fillAnswer:
          "Các tôn giáo ở Việt Nam rất đa dạng về ______ và truyền thống lịch sử.",
        answer: "nguồn gốc",
        fullFillAnswer:
          "Tôn giáo ở Việt Nam có sự đa dạng về nguồn gốc và truyền thống lịch sử.",
      }),
      createQuestion({
        id: 9,
        term: "Đan xen trên cùng địa bàn",
        definition:
          "Tín đồ của các tôn giáo khác nhau cùng sống trên nhiều địa bàn khác nhau trong cả nước.",
        question:
          "Nhận định nào đúng về sự tồn tại của các tôn giáo ở Việt Nam?",
        options: [
          "Các tôn giáo hoàn toàn tách biệt địa bàn",
          "Các tôn giáo đan xen trên nhiều địa bàn",
          "Mỗi tỉnh chỉ có một tôn giáo",
          "Tôn giáo chỉ tồn tại ở đô thị",
        ],
        correct: 1,
        fillAnswer:
          "Các tôn giáo ở Việt Nam tồn tại ______ trên nhiều địa bàn.",
        answer: "đan xen",
        fullFillAnswer:
          "Một đặc điểm nổi bật là các tôn giáo ở Việt Nam tồn tại đan xen trên nhiều địa bàn.",
      }),
      createQuestion({
        id: 10,
        term: "Chung sống hòa bình",
        definition:
          "Các tín đồ tôn giáo ở Việt Nam cùng chung sống hòa bình và tôn trọng niềm tin của nhau.",
        question:
          "Mối quan hệ giữa các tôn giáo ở Việt Nam được thể hiện như thế nào?",
        options: [
          "Thường xuyên xung đột",
          "Có chiến tranh tôn giáo kéo dài",
          "Chung sống hòa bình, tôn trọng nhau",
          "Hoàn toàn không tiếp xúc với nhau",
        ],
        correct: 2,
        fillAnswer:
          "Các tín đồ tôn giáo khác nhau ở Việt Nam cùng chung sống ______.",
        answer: "hòa bình",
        fullFillAnswer:
          "Ở Việt Nam, tín đồ các tôn giáo khác nhau cùng chung sống hòa bình và tôn trọng niềm tin của nhau.",
      }),
      createQuestion({
        id: 11,
        term: "Không có chiến tranh tôn giáo",
        definition:
          "Ở Việt Nam chưa từng xảy ra xung đột, chiến tranh tôn giáo.",
        question: "Theo nội dung bài học, đặc điểm nào đúng với Việt Nam?",
        options: [
          "Thường xuyên có chiến tranh tôn giáo",
          "Chưa từng xảy ra xung đột, chiến tranh tôn giáo",
          "Các tôn giáo luôn mâu thuẫn gay gắt",
          "Mỗi tôn giáo lập một vùng riêng",
        ],
        correct: 1,
        fillAnswer: "Ở Việt Nam chưa từng xảy ra ______ tôn giáo.",
        answer: "xung đột, chiến tranh",
        fullFillAnswer:
          "Một đặc điểm quan trọng là ở Việt Nam chưa từng xảy ra xung đột, chiến tranh tôn giáo.",
      }),
      createQuestion({
        id: 12,
        term: "Dấu ấn văn hóa Việt Nam",
        definition:
          "Các tôn giáo du nhập vào Việt Nam đều chịu ảnh hưởng của bản sắc văn hóa Việt Nam.",
        question:
          "Thực tế cho thấy các tôn giáo du nhập vào Việt Nam có đặc điểm gì?",
        options: [
          "Không chịu ảnh hưởng văn hóa Việt Nam",
          "Giữ nguyên hoàn toàn như nơi xuất phát",
          "Đều mang dấu ấn của bản sắc văn hóa Việt Nam",
          "Bị loại bỏ hoàn toàn bản sắc gốc",
        ],
        correct: 2,
        fillAnswer:
          "Không có tôn giáo nào du nhập vào Việt Nam mà không mang dấu ấn của ______.",
        answer: "bản sắc văn hóa Việt Nam",
        fullFillAnswer:
          "Các tôn giáo du nhập vào Việt Nam đều mang dấu ấn và chịu ảnh hưởng của bản sắc văn hóa Việt Nam.",
      }),
      createQuestion({
        id: 13,
        term: "Tín đồ phần lớn là nhân dân lao động",
        definition:
          "Tín đồ các tôn giáo ở Việt Nam có thành phần đa dạng nhưng phần lớn là nhân dân lao động.",
        question:
          "Tín đồ các tôn giáo ở Việt Nam phần lớn thuộc thành phần nào?",
        options: [
          "Quý tộc",
          "Nhân dân lao động",
          "Giới tài phiệt",
          "Người nước ngoài",
        ],
        correct: 1,
        fillAnswer: "Tín đồ các tôn giáo Việt Nam phần lớn là ______.",
        answer: "nhân dân lao động",
        fullFillAnswer:
          "Tín đồ các tôn giáo ở Việt Nam có thành phần đa dạng nhưng chủ yếu là nhân dân lao động.",
      }),
      createQuestion({
        id: 14,
        term: "Tinh thần yêu nước của tín đồ",
        definition:
          "Đa số tín đồ các tôn giáo đều có lòng yêu nước và tinh thần dân tộc.",
        question: "Đâu là nhận định đúng về tín đồ các tôn giáo ở Việt Nam?",
        options: [
          "Phần lớn thờ ơ với dân tộc",
          "Đa số có lòng yêu nước, tinh thần dân tộc",
          "Không quan tâm đến vận mệnh đất nước",
          "Đều đứng ngoài các nhiệm vụ quốc gia",
        ],
        correct: 1,
        fillAnswer:
          "Đa số tín đồ các tôn giáo ở Việt Nam có lòng ______ và tinh thần dân tộc.",
        answer: "yêu nước",
        fullFillAnswer:
          "Một đặc điểm đáng chú ý là đa số tín đồ các tôn giáo ở Việt Nam có lòng yêu nước và tinh thần dân tộc.",
      }),
      createQuestion({
        id: 15,
        term: "Gắn bó với dân tộc",
        definition:
          "Tín đồ nhiều tôn giáo ở Việt Nam có truyền thống gắn bó với dân tộc và cách mạng.",
        question:
          "Trong các giai đoạn lịch sử, tín đồ các tôn giáo ở Việt Nam thể hiện điều gì?",
        options: [
          "Tách rời dân tộc",
          "Không tham gia các nhiệm vụ chung",
          "Gắn bó với dân tộc, tham gia xây dựng và bảo vệ Tổ quốc",
          "Chỉ quan tâm đời sống cá nhân",
        ],
        correct: 2,
        fillAnswer:
          "Tín đồ các tôn giáo ở Việt Nam có truyền thống ______ với dân tộc.",
        answer: "gắn bó",
        fullFillAnswer:
          "Trong lịch sử, tín đồ các tôn giáo ở Việt Nam luôn có truyền thống gắn bó với dân tộc.",
      }),
      createQuestion({
        id: 16,
        term: "Tốt đời, đẹp đạo",
        definition: "Đồng bào có đạo có ước vọng sống tốt đời, đẹp đạo.",
        question:
          "Ước vọng chung của nhiều tín đồ tôn giáo ở Việt Nam được thể hiện bằng cụm từ nào?",
        options: [
          "Sống tách biệt xã hội",
          "Tốt đời, đẹp đạo",
          "Đạo cao hơn đời",
          "Chỉ lo đời sống tâm linh",
        ],
        correct: 1,
        fillAnswer: "Đồng bào có đạo ở Việt Nam có ước vọng sống ______.",
        answer: "tốt đời, đẹp đạo",
        fullFillAnswer:
          "Một nét đẹp trong đời sống tôn giáo Việt Nam là đồng bào có đạo có ước vọng sống tốt đời, đẹp đạo.",
      }),
      createQuestion({
        id: 17,
        term: "Vai trò của chức sắc tôn giáo",
        definition:
          "Chức sắc có vai trò quan trọng trong giáo hội và có uy tín, ảnh hưởng đối với tín đồ.",
        question:
          "Đâu là nhận định đúng về hàng ngũ chức sắc tôn giáo ở Việt Nam?",
        options: [
          "Không có vai trò trong giáo hội",
          "Có vai trò, vị trí quan trọng và ảnh hưởng đối với tín đồ",
          "Chỉ tham gia hoạt động kinh tế",
          "Không liên quan đến đời sống tinh thần của tín đồ",
        ],
        correct: 1,
        fillAnswer:
          "Hàng ngũ chức sắc tôn giáo có vị trí quan trọng trong giáo hội và có ______ với tín đồ.",
        answer: "uy tín, ảnh hưởng",
        fullFillAnswer:
          "Chức sắc tôn giáo có vai trò, vị trí quan trọng trong giáo hội và có uy tín, ảnh hưởng đối với tín đồ.",
      }),
      createQuestion({
        id: 18,
        term: "Chức năng của chức sắc",
        definition:
          "Chức sắc truyền bá giáo lý, thực hành giáo luật, lễ nghi, quản lý tổ chức tôn giáo và chăm lo đời sống tâm linh.",
        question: "Vai trò nào phản ánh đúng chức năng của chức sắc tôn giáo?",
        options: [
          "Chỉ quản lý hành chính nhà nước",
          "Truyền bá giáo lý, thực hành lễ nghi và chăm lo đời sống tâm linh",
          "Chỉ phụ trách cơ sở vật chất",
          "Không có nhiệm vụ đối với tín đồ",
        ],
        correct: 1,
        fillAnswer:
          "Chức sắc tôn giáo có nhiệm vụ truyền bá giáo lý, giáo luật, lễ nghi và chăm lo ______ cho tín đồ.",
        answer: "đời sống tâm linh",
        fullFillAnswer:
          "Về mặt tôn giáo, chức sắc có nhiệm vụ truyền bá giáo lý, giáo luật, lễ nghi và chăm lo đời sống tâm linh cho tín đồ.",
      }),
      createQuestion({
        id: 19,
        term: "Quan hệ với nước ngoài",
        definition:
          "Các tôn giáo ở Việt Nam đều có quan hệ nhất định với tổ chức, cá nhân tôn giáo ở nước ngoài.",
        question:
          "Đặc điểm nào đúng về quan hệ của các tôn giáo ở Việt Nam hiện nay?",
        options: [
          "Hoàn toàn không có liên hệ với bên ngoài",
          "Chỉ tôn giáo nội sinh mới có quan hệ quốc tế",
          "Các tôn giáo đều có quan hệ nhất định với tổ chức, cá nhân tôn giáo ở nước ngoài",
          "Chỉ các tôn giáo du nhập mới được tồn tại",
        ],
        correct: 2,
        fillAnswer:
          "Các tôn giáo ở Việt Nam đều có quan hệ với các tổ chức, cá nhân tôn giáo ở ______.",
        answer: "nước ngoài",
        fullFillAnswer:
          "Một đặc điểm quan trọng là các tôn giáo ở Việt Nam đều có quan hệ nhất định với tổ chức, cá nhân tôn giáo ở nước ngoài.",
      }),
      createQuestion({
        id: 20,
        term: "Kết hợp giao lưu quốc tế với bảo vệ chủ quyền",
        definition:
          "Giải quyết vấn đề tôn giáo phải gắn mở rộng giao lưu quốc tế với bảo đảm độc lập, chủ quyền và ngăn ngừa sự lợi dụng từ bên ngoài.",
        question:
          "Khi giải quyết vấn đề tôn giáo ở Việt Nam cần kết hợp yêu cầu nào?",
        options: [
          "Mở rộng giao lưu không cần quản lý",
          "Đóng cửa hoàn toàn quan hệ quốc tế",
          "Mở rộng giao lưu hợp tác quốc tế đi đôi với bảo đảm độc lập, chủ quyền",
          "Để các thế lực bên ngoài can thiệp tự do",
        ],
        correct: 2,
        fillAnswer:
          "Giải quyết vấn đề tôn giáo ở Việt Nam phải kết hợp mở rộng giao lưu quốc tế với bảo đảm ______.",
        answer: "độc lập, chủ quyền",
        fullFillAnswer:
          "Việc giải quyết vấn đề tôn giáo ở Việt Nam phải kết hợp giữa mở rộng giao lưu hợp tác quốc tế với bảo đảm độc lập, chủ quyền quốc gia.",
      }),
    ],
  },
  {
    id: 110022,
    title:
      "Phần 2: Chính sách của Đảng và Nhà nước đối với tín ngưỡng, tôn giáo",
    description:
      "Chính sách tín ngưỡng, tôn giáo của Đảng và Nhà nước hiện nay",
    icon: "⚖️",
    questions: [
      createQuestion({
        id: 1,
        term: "Tín ngưỡng, tôn giáo là nhu cầu tinh thần",
        definition:
          "Đảng khẳng định tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân.",
        question:
          "Đảng ta xác định tín ngưỡng, tôn giáo là gì đối với một bộ phận nhân dân?",
        options: [
          "Là hiện tượng cần xóa bỏ ngay",
          "Là nhu cầu tinh thần",
          "Là hiện tượng chỉ tồn tại tạm thời",
          "Là hoạt động không liên quan xã hội",
        ],
        correct: 1,
        fillAnswer:
          "Đảng ta xác định tín ngưỡng, tôn giáo là ______ của một bộ phận nhân dân.",
        answer: "nhu cầu tinh thần",
        fullFillAnswer:
          "Quan điểm của Đảng là tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân.",
      }),
      createQuestion({
        id: 2,
        term: "Tồn tại lâu dài cùng dân tộc",
        definition:
          "Tín ngưỡng, tôn giáo đang và sẽ còn tồn tại lâu dài cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội ở nước ta.",
        question:
          "Đảng ta nhận định như thế nào về sự tồn tại của tín ngưỡng, tôn giáo ở nước ta?",
        options: [
          "Sẽ tự mất đi ngay",
          "Chỉ tồn tại trong thời gian rất ngắn",
          "Sẽ tồn tại lâu dài cùng dân tộc",
          "Hoàn toàn không còn vai trò xã hội",
        ],
        correct: 2,
        fillAnswer:
          "Tín ngưỡng, tôn giáo đang và sẽ ______ cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội ở nước ta.",
        answer: "tồn tại lâu dài",
        fullFillAnswer:
          "Đảng khẳng định tín ngưỡng, tôn giáo sẽ tồn tại lâu dài cùng dân tộc trong quá trình xây dựng chủ nghĩa xã hội.",
      }),
      createQuestion({
        id: 3,
        term: "Quan điểm khoa học và cách mạng",
        definition:
          "Cách nhìn nhận tín ngưỡng, tôn giáo của Đảng mang tính khoa học và cách mạng.",
        question:
          "Sự khẳng định của Đảng về tín ngưỡng, tôn giáo mang tính chất gì?",
        options: [
          "Chủ quan và duy ý chí",
          "Khoa học và cách mạng",
          "Chỉ mang tính hành chính",
          "Hoàn toàn cảm tính",
        ],
        correct: 1,
        fillAnswer:
          "Sự khẳng định của Đảng về tín ngưỡng, tôn giáo mang tính ______ và cách mạng.",
        answer: "khoa học",
        fullFillAnswer:
          "Đảng nhìn nhận tín ngưỡng, tôn giáo trên lập trường khoa học và cách mạng.",
      }),
      createQuestion({
        id: 4,
        term: "Phê phán quan điểm tả khuynh",
        definition:
          "Không thể dùng biện pháp hành chính để xóa bỏ tín ngưỡng, tôn giáo.",
        question:
          "Quan điểm nào bị phê phán là tả khuynh trong vấn đề tôn giáo?",
        options: [
          "Cho rằng tín ngưỡng, tôn giáo tồn tại lâu dài",
          "Tôn trọng quyền tự do tín ngưỡng",
          "Cho rằng có thể dùng biện pháp hành chính để làm mất tín ngưỡng, tôn giáo",
          "Đoàn kết đồng bào có đạo và không có đạo",
        ],
        correct: 2,
        fillAnswer:
          "Quan điểm cho rằng có thể dùng biện pháp ______ để xóa bỏ tín ngưỡng, tôn giáo là sai lầm.",
        answer: "hành chính",
        fullFillAnswer:
          "Đảng phê phán quan điểm tả khuynh cho rằng có thể dùng biện pháp hành chính để làm cho tín ngưỡng, tôn giáo mất đi.",
      }),
      createQuestion({
        id: 5,
        term: "Phê phán quan điểm duy tâm, hữu khuynh",
        definition:
          "Sai lầm khi xem tín ngưỡng, tôn giáo là hiện tượng bất biến, độc lập với cơ sở kinh tế - xã hội.",
        question: "Quan điểm nào bị phê phán là duy tâm, hữu khuynh?",
        options: [
          "Xem tín ngưỡng, tôn giáo là hiện tượng bất biến, tách rời cơ sở kinh tế - xã hội",
          "Tôn trọng quyền tự do tín ngưỡng",
          "Bình đẳng các tôn giáo trước pháp luật",
          "Đấu tranh với việc lợi dụng tôn giáo",
        ],
        correct: 0,
        fillAnswer:
          "Quan điểm cho rằng tín ngưỡng, tôn giáo là hiện tượng ______, thoát ly mọi cơ sở kinh tế - xã hội là sai lầm.",
        answer: "bất biến",
        fullFillAnswer:
          "Đảng phê phán quan điểm duy tâm, hữu khuynh khi xem tín ngưỡng, tôn giáo là hiện tượng bất biến, độc lập với cơ sở kinh tế - xã hội.",
      }),
      createQuestion({
        id: 6,
        term: "Tôn trọng quyền tự do tín ngưỡng, tôn giáo",
        definition:
          "Nhà nước nhất quán tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo của công dân.",
        question:
          "Chính sách nhất quán của Nhà nước ta về tín ngưỡng, tôn giáo là gì?",
        options: [
          "Hạn chế tuyệt đối mọi sinh hoạt tôn giáo",
          "Chỉ cho phép một tôn giáo hoạt động",
          "Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo",
          "Không công nhận bất kỳ hình thức tín ngưỡng nào",
        ],
        correct: 2,
        fillAnswer:
          "Nhà nước thực hiện nhất quán chính sách tôn trọng và bảo đảm quyền tự do ______.",
        answer: "tín ngưỡng, tôn giáo",
        fullFillAnswer:
          "Chính sách nhất quán của Nhà nước là tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo của công dân.",
      }),
      createQuestion({
        id: 7,
        term: "Quyền theo hoặc không theo tôn giáo",
        definition:
          "Công dân có quyền theo hoặc không theo một tín ngưỡng, tôn giáo nào.",
        question:
          "Công dân được pháp luật bảo đảm quyền nào trong lĩnh vực tín ngưỡng, tôn giáo?",
        options: [
          "Chỉ được theo một tôn giáo được chỉ định",
          "Được theo hoặc không theo một tín ngưỡng, tôn giáo nào",
          "Buộc phải đăng ký niềm tin cá nhân",
          "Không được thay đổi niềm tin",
        ],
        correct: 1,
        fillAnswer: "Công dân có quyền theo hoặc không theo ______ nào.",
        answer: "một tín ngưỡng, tôn giáo",
        fullFillAnswer:
          "Một nội dung quan trọng của quyền tự do tín ngưỡng, tôn giáo là công dân có quyền theo hoặc không theo một tín ngưỡng, tôn giáo nào.",
      }),
      createQuestion({
        id: 8,
        term: "Quyền sinh hoạt tôn giáo bình thường",
        definition:
          "Quyền sinh hoạt tín ngưỡng, tôn giáo bình thường được bảo đảm theo đúng pháp luật.",
        question:
          "Quyền sinh hoạt tín ngưỡng, tôn giáo của công dân được thực hiện như thế nào?",
        options: [
          "Tự do tuyệt đối, không cần theo pháp luật",
          "Theo đúng pháp luật",
          "Chỉ khi được tổ chức quốc tế chấp thuận",
          "Chỉ trong dịp lễ lớn",
        ],
        correct: 1,
        fillAnswer:
          "Quyền sinh hoạt tín ngưỡng, tôn giáo bình thường được bảo đảm ______ pháp luật.",
        answer: "theo đúng",
        fullFillAnswer:
          "Nhà nước bảo đảm quyền sinh hoạt tín ngưỡng, tôn giáo bình thường theo đúng pháp luật.",
      }),
      createQuestion({
        id: 9,
        term: "Hoạt động trong khuôn khổ pháp luật",
        definition: "Các tôn giáo hoạt động trong khuôn khổ pháp luật.",
        question:
          "Nguyên tắc nào điều chỉnh hoạt động của các tôn giáo ở Việt Nam?",
        options: [
          "Hoạt động ngoài khuôn khổ pháp luật",
          "Hoạt động theo cảm tính của từng tổ chức",
          "Hoạt động trong khuôn khổ pháp luật",
          "Không cần sự quản lý nào",
        ],
        correct: 2,
        fillAnswer: "Các tôn giáo hoạt động trong ______ pháp luật.",
        answer: "khuôn khổ",
        fullFillAnswer:
          "Mọi hoạt động tôn giáo ở Việt Nam đều phải diễn ra trong khuôn khổ pháp luật.",
      }),
      createQuestion({
        id: 10,
        term: "Bình đẳng trước pháp luật",
        definition: "Các tôn giáo đều bình đẳng trước pháp luật.",
        question:
          "Đâu là nguyên tắc đúng trong chính sách tôn giáo ở Việt Nam?",
        options: [
          "Ưu tiên tuyệt đối cho một tôn giáo",
          "Các tôn giáo bình đẳng trước pháp luật",
          "Chỉ tôn giáo lớn mới được bảo đảm quyền",
          "Tôn giáo nội sinh cao hơn tôn giáo du nhập",
        ],
        correct: 1,
        fillAnswer:
          "Các tôn giáo hoạt động trong khuôn khổ pháp luật và ______ trước pháp luật.",
        answer: "bình đẳng",
        fullFillAnswer:
          "Một nguyên tắc cơ bản là các tôn giáo đều bình đẳng trước pháp luật.",
      }),
      createQuestion({
        id: 11,
        term: "Chính sách đại đoàn kết dân tộc",
        definition:
          "Đảng và Nhà nước thực hiện nhất quán chính sách đại đoàn kết dân tộc trong lĩnh vực tôn giáo.",
        question:
          "Chính sách lớn của Đảng và Nhà nước trong lĩnh vực tôn giáo hiện nay là gì?",
        options: [
          "Chia tách cộng đồng theo tôn giáo",
          "Đại đoàn kết dân tộc",
          "Ưu tiên nhóm có đạo hơn nhóm không có đạo",
          "Loại bỏ vai trò của tín đồ tôn giáo",
        ],
        correct: 1,
        fillAnswer:
          "Đảng và Nhà nước thực hiện nhất quán chính sách ______ dân tộc.",
        answer: "đại đoàn kết",
        fullFillAnswer:
          "Trong lĩnh vực tôn giáo, Đảng và Nhà nước luôn thực hiện chính sách đại đoàn kết dân tộc.",
      }),
      createQuestion({
        id: 12,
        term: "Đoàn kết đồng bào các tôn giáo khác nhau",
        definition:
          "Chính sách tôn giáo nhấn mạnh đoàn kết đồng bào theo các tôn giáo khác nhau.",
        question:
          "Nội dung nào sau đây thuộc chính sách đại đoàn kết dân tộc trong lĩnh vực tôn giáo?",
        options: [
          "Tách biệt tín đồ từng tôn giáo",
          "Đoàn kết đồng bào theo các tôn giáo khác nhau",
          "Không quan tâm đến đồng bào có đạo",
          "Xem tôn giáo là yếu tố gây chia rẽ tất yếu",
        ],
        correct: 1,
        fillAnswer:
          "Chính sách đại đoàn kết dân tộc nhấn mạnh đoàn kết đồng bào theo ______ khác nhau.",
        answer: "các tôn giáo",
        fullFillAnswer:
          "Một nội dung quan trọng là đoàn kết đồng bào theo các tôn giáo khác nhau.",
      }),
      createQuestion({
        id: 13,
        term: "Đoàn kết đồng bào có đạo và không có đạo",
        definition:
          "Đảng, Nhà nước chủ trương đoàn kết đồng bào theo tôn giáo và đồng bào không theo tôn giáo.",
        question:
          "Chính sách đại đoàn kết dân tộc trong lĩnh vực tôn giáo nhấn mạnh điều gì?",
        options: [
          "Chỉ đoàn kết đồng bào không theo tôn giáo",
          "Chỉ đoàn kết đồng bào có đạo",
          "Đoàn kết đồng bào có đạo và không có đạo",
          "Tách riêng hai bộ phận dân cư",
        ],
        correct: 2,
        fillAnswer:
          "Đảng, Nhà nước chủ trương đoàn kết đồng bào theo tôn giáo và đồng bào ______.",
        answer: "không theo tôn giáo",
        fullFillAnswer:
          "Đại đoàn kết dân tộc trong lĩnh vực tôn giáo là đoàn kết đồng bào theo tôn giáo với đồng bào không theo tôn giáo.",
      }),
      createQuestion({
        id: 14,
        term: "Nghiêm cấm chia rẽ, phân biệt đối xử",
        definition:
          "Nhà nước nghiêm cấm mọi hành vi chia rẽ, phân biệt đối xử với công dân vì lý do tín ngưỡng, tôn giáo.",
        question:
          "Hành vi nào bị nghiêm cấm theo chính sách tôn giáo hiện nay?",
        options: [
          "Tôn trọng quyền tự do tín ngưỡng",
          "Chia rẽ, phân biệt đối xử vì lý do tín ngưỡng, tôn giáo",
          "Đoàn kết đồng bào các tôn giáo",
          "Sinh hoạt tôn giáo đúng pháp luật",
        ],
        correct: 1,
        fillAnswer:
          "Nhà nước nghiêm cấm mọi hành vi chia rẽ, ______ với công dân vì lý do tín ngưỡng, tôn giáo.",
        answer: "phân biệt đối xử",
        fullFillAnswer:
          "Nhà nước nghiêm cấm mọi hành vi chia rẽ, phân biệt đối xử với công dân vì lý do tín ngưỡng, tôn giáo.",
      }),
      createQuestion({
        id: 15,
        term: "Mọi công dân đều có quyền và nghĩa vụ xây dựng, bảo vệ Tổ quốc",
        definition:
          "Không phân biệt tín ngưỡng, tôn giáo, mọi công dân đều có quyền và nghĩa vụ xây dựng, bảo vệ Tổ quốc.",
        question:
          "Theo chính sách hiện hành, công dân được xác định như thế nào trong nhiệm vụ xây dựng và bảo vệ Tổ quốc?",
        options: [
          "Chỉ người không theo tôn giáo mới có nghĩa vụ",
          "Chỉ người theo tôn giáo mới có nghĩa vụ",
          "Mọi công dân không phân biệt tín ngưỡng, tôn giáo đều có quyền và nghĩa vụ",
          "Người có đạo không phải thực hiện nghĩa vụ công dân",
        ],
        correct: 2,
        fillAnswer:
          "Mọi công dân không phân biệt tín ngưỡng, tôn giáo đều có quyền và ______ xây dựng, bảo vệ Tổ quốc.",
        answer: "nghĩa vụ",
        fullFillAnswer:
          "Nhà nước xác định mọi công dân, không phân biệt tín ngưỡng, tôn giáo, đều có quyền và nghĩa vụ xây dựng, bảo vệ Tổ quốc.",
      }),
      createQuestion({
        id: 16,
        term: "Giữ gìn giá trị truyền thống tốt đẹp",
        definition:
          "Chính sách tôn giáo chú trọng giữ gìn và phát huy truyền thống thờ cúng tổ tiên, tôn vinh người có công.",
        question:
          "Nội dung nào sau đây được Nhà nước chủ trương giữ gìn và phát huy?",
        options: [
          "Mọi hình thức mê tín dị đoan",
          "Truyền thống thờ cúng tổ tiên và tôn vinh người có công",
          "Các hoạt động trái pháp luật",
          "Mọi hình thức ép buộc tôn giáo",
        ],
        correct: 1,
        fillAnswer:
          "Nhà nước chủ trương giữ gìn và phát huy những giá trị tích cực của truyền thống ______ tổ tiên.",
        answer: "thờ cúng",
        fullFillAnswer:
          "Chính sách tôn giáo đề cao việc giữ gìn và phát huy truyền thống thờ cúng tổ tiên, tôn vinh người có công với Tổ quốc và nhân dân.",
      }),
      createQuestion({
        id: 17,
        term: "Nghiêm cấm mê tín dị đoan",
        definition:
          "Nhà nước nghiêm cấm lợi dụng tín ngưỡng, tôn giáo để hoạt động mê tín dị đoan.",
        question:
          "Hành vi nào bị nghiêm cấm trong chính sách tôn giáo hiện nay?",
        options: [
          "Sinh hoạt tôn giáo bình thường",
          "Giữ gìn truyền thống tốt đẹp",
          "Lợi dụng tín ngưỡng, tôn giáo để hoạt động mê tín dị đoan",
          "Đoàn kết dân tộc",
        ],
        correct: 2,
        fillAnswer:
          "Nhà nước nghiêm cấm lợi dụng tín ngưỡng, tôn giáo để hoạt động ______.",
        answer: "mê tín dị đoan",
        fullFillAnswer:
          "Một nội dung quan trọng của chính sách hiện nay là nghiêm cấm lợi dụng tín ngưỡng, tôn giáo để hoạt động mê tín dị đoan.",
      }),
      createQuestion({
        id: 18,
        term: "Nghiêm cấm hoạt động trái pháp luật",
        definition:
          "Không được lợi dụng tín ngưỡng, tôn giáo để hoạt động trái pháp luật và chính sách của Nhà nước.",
        question:
          "Điều gì bị nghiêm cấm trong hoạt động liên quan đến tín ngưỡng, tôn giáo?",
        options: [
          "Thực hiện quyền tự do tín ngưỡng",
          "Lợi dụng tín ngưỡng, tôn giáo để hoạt động trái pháp luật",
          "Đoàn kết nhân dân",
          "Phát huy giá trị đạo đức tốt đẹp",
        ],
        correct: 1,
        fillAnswer:
          "Nghiêm cấm lợi dụng tín ngưỡng, tôn giáo để hoạt động ______ pháp luật và chính sách của Nhà nước.",
        answer: "trái",
        fullFillAnswer:
          "Nhà nước kiên quyết nghiêm cấm việc lợi dụng tín ngưỡng, tôn giáo để hoạt động trái pháp luật và chính sách của Nhà nước.",
      }),
      createQuestion({
        id: 19,
        term: "Chống kích động chia rẽ",
        definition:
          "Nhà nước nghiêm cấm lợi dụng tôn giáo để kích động chia rẽ nhân dân, chia rẽ dân tộc.",
        question:
          "Hành vi nào sau đây đi ngược lại chính sách tôn giáo của Đảng và Nhà nước?",
        options: [
          "Kích động chia rẽ nhân dân, chia rẽ dân tộc",
          "Đoàn kết đồng bào các tôn giáo",
          "Tôn trọng quyền tự do tín ngưỡng",
          "Thực hiện quyền công dân",
        ],
        correct: 0,
        fillAnswer:
          "Nhà nước nghiêm cấm lợi dụng tôn giáo để kích động ______ nhân dân, chia rẽ các dân tộc.",
        answer: "chia rẽ",
        fullFillAnswer:
          "Chính sách tôn giáo của Nhà nước nghiêm cấm lợi dụng tôn giáo để kích động chia rẽ nhân dân, chia rẽ các dân tộc.",
      }),
      createQuestion({
        id: 20,
        term: "Bảo đảm mục tiêu dân giàu, nước mạnh",
        definition:
          "Chính sách tôn giáo gắn với việc tăng cường đoàn kết để thực hiện mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        question:
          "Việc tăng cường đoàn kết trong lĩnh vực tôn giáo nhằm hướng tới mục tiêu nào?",
        options: [
          "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
          "Chỉ phát triển đời sống tôn giáo",
          "Tách biệt đời và đạo",
          "Ưu tiên riêng từng cộng đồng tôn giáo",
        ],
        correct: 0,
        fillAnswer:
          "Chính sách tôn giáo hướng tới mục tiêu ______, dân chủ, công bằng, văn minh.",
        answer: "dân giàu, nước mạnh",
        fullFillAnswer:
          "Tăng cường đoàn kết trong lĩnh vực tôn giáo góp phần thực hiện mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
      }),
    ],
  },
  {
    id: 110023,
    title: "Phần 3: Công tác tôn giáo",
    description:
      "Nội dung cốt lõi, mục tiêu, lực lượng và yêu cầu thực hiện công tác tôn giáo",
    icon: "🤝",
    questions: [
      createQuestion({
        id: 1,
        term: "Nội dung cốt lõi của công tác tôn giáo",
        definition:
          "Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng.",
        question:
          "Theo quan điểm hiện nay, nội dung cốt lõi của công tác tôn giáo là gì?",
        options: [
          "Công tác quản lý hành chính đơn thuần",
          "Công tác vận động quần chúng",
          "Công tác lễ nghi tôn giáo",
          "Công tác đối ngoại nhân dân",
        ],
        correct: 1,
        fillAnswer:
          "Nội dung cốt lõi của công tác tôn giáo là công tác ______.",
        answer: "vận động quần chúng",
        fullFillAnswer:
          "Theo quan điểm chỉ đạo, công tác vận động quần chúng là nội dung cốt lõi của công tác tôn giáo.",
      }),
      createQuestion({
        id: 2,
        term: "Mục tiêu của công tác vận động quần chúng",
        definition:
          "Công tác vận động quần chúng nhằm động viên đồng bào tôn giáo phát huy tinh thần yêu nước.",
        question:
          "Công tác vận động quần chúng các tôn giáo nhằm động viên điều gì?",
        options: [
          "Tâm lý biệt lập với xã hội",
          "Tinh thần yêu nước",
          "Xu hướng tách khỏi cộng đồng dân tộc",
          "Tư tưởng chống đối",
        ],
        correct: 1,
        fillAnswer:
          "Công tác vận động quần chúng nhằm động viên đồng bào nêu cao tinh thần ______.",
        answer: "yêu nước",
        fullFillAnswer:
          "Một mục tiêu quan trọng của công tác vận động quần chúng các tôn giáo là phát huy tinh thần yêu nước.",
      }),
      createQuestion({
        id: 3,
        term: "Bảo vệ độc lập và thống nhất đất nước",
        definition:
          "Công tác vận động quần chúng các tôn giáo còn nhằm nâng cao ý thức bảo vệ độc lập, thống nhất đất nước.",
        question:
          "Ngoài tinh thần yêu nước, công tác vận động quần chúng các tôn giáo còn hướng tới điều gì?",
        options: [
          "Tách riêng từng nhóm tín đồ",
          "Ý thức bảo vệ độc lập và thống nhất đất nước",
          "Chỉ tập trung sinh hoạt nghi lễ",
          "Giảm vai trò công dân",
        ],
        correct: 1,
        fillAnswer:
          "Công tác vận động quần chúng các tôn giáo nhằm nâng cao ý thức bảo vệ ______ và thống nhất đất nước.",
        answer: "độc lập",
        fullFillAnswer:
          "Công tác vận động quần chúng các tôn giáo nhằm nâng cao ý thức bảo vệ độc lập và thống nhất đất nước.",
      }),
      createQuestion({
        id: 4,
        term: "Gắn với thực hiện tốt chính sách kinh tế - xã hội",
        definition:
          "Công tác tôn giáo phải gắn với thực hiện tốt các chính sách kinh tế - xã hội, an ninh, quốc phòng.",
        question:
          "Để vận động quần chúng tôn giáo hiệu quả cần gắn với việc thực hiện tốt lĩnh vực nào?",
        options: [
          "Chỉ riêng hoạt động lễ hội",
          "Chỉ riêng tuyên truyền pháp luật",
          "Chính sách kinh tế - xã hội, an ninh, quốc phòng",
          "Chỉ riêng quản lý hộ tịch",
        ],
        correct: 2,
        fillAnswer:
          "Công tác vận động quần chúng cần gắn với thực hiện tốt các chính sách kinh tế - xã hội, an ninh, ______.",
        answer: "quốc phòng",
        fullFillAnswer:
          "Muốn công tác tôn giáo hiệu quả phải gắn với việc thực hiện tốt các chính sách kinh tế - xã hội, an ninh, quốc phòng.",
      }),
      createQuestion({
        id: 5,
        term: "Bảo đảm lợi ích vật chất và tinh thần",
        definition:
          "Công tác vận động quần chúng cần bảo đảm lợi ích vật chất và tinh thần của nhân dân, trong đó có đồng bào tôn giáo.",
        question:
          "Công tác vận động quần chúng các tôn giáo cần chú ý bảo đảm điều gì?",
        options: [
          "Chỉ lợi ích tinh thần",
          "Chỉ lợi ích của tổ chức tôn giáo",
          "Lợi ích vật chất và tinh thần của nhân dân",
          "Chỉ lợi ích của cán bộ quản lý",
        ],
        correct: 2,
        fillAnswer:
          "Công tác tôn giáo cần bảo đảm lợi ích ______ và tinh thần của nhân dân.",
        answer: "vật chất",
        fullFillAnswer:
          "Một yêu cầu quan trọng của công tác tôn giáo là bảo đảm lợi ích vật chất và tinh thần của nhân dân, trong đó có đồng bào tôn giáo.",
      }),
      createQuestion({
        id: 6,
        term: "Phát triển vùng đồng bào theo các tôn giáo",
        definition:
          "Cần đẩy mạnh phát triển kinh tế, xã hội, văn hóa ở vùng đồng bào theo các tôn giáo.",
        question:
          "Biện pháp quan trọng để nâng cao hiệu quả công tác tôn giáo là gì?",
        options: [
          "Tách riêng vùng đồng bào có đạo",
          "Hạn chế phát triển giáo dục, văn hóa",
          "Phát triển kinh tế, xã hội, văn hóa ở vùng đồng bào theo các tôn giáo",
          "Chỉ tập trung vào nghi lễ tôn giáo",
        ],
        correct: 2,
        fillAnswer:
          "Cần đẩy mạnh phát triển kinh tế, xã hội, ______ ở vùng đồng bào theo các tôn giáo.",
        answer: "văn hóa",
        fullFillAnswer:
          "Phát triển kinh tế, xã hội, văn hóa ở vùng đồng bào theo các tôn giáo là biện pháp quan trọng để nâng cao hiệu quả công tác tôn giáo.",
      }),
      createQuestion({
        id: 7,
        term: "Nâng cao đời sống mọi mặt cho đồng bào",
        definition:
          "Công tác tôn giáo hiệu quả phải giúp nâng cao đời sống mọi mặt cho đồng bào có đạo.",
        question:
          "Việc phát triển kinh tế, xã hội, văn hóa ở vùng đồng bào tôn giáo nhằm mục đích gì?",
        options: [
          "Để thu hẹp quyền sinh hoạt tôn giáo",
          "Để nâng cao đời sống mọi mặt cho đồng bào",
          "Để tách tín đồ khỏi cộng đồng",
          "Để thay thế tổ chức tôn giáo",
        ],
        correct: 1,
        fillAnswer:
          "Phát triển vùng đồng bào tôn giáo nhằm nâng cao ______ mọi mặt cho đồng bào.",
        answer: "đời sống",
        fullFillAnswer:
          "Mục tiêu trực tiếp của việc phát triển vùng đồng bào tôn giáo là nâng cao đời sống mọi mặt cho đồng bào.",
      }),
      createQuestion({
        id: 8,
        term: "Nâng cao nhận thức của quần chúng",
        definition:
          "Công tác tôn giáo cần làm cho quần chúng nhận thức đầy đủ, đúng đắn đường lối, chính sách của Đảng và pháp luật của Nhà nước.",
        question:
          "Một yêu cầu của công tác tôn giáo là giúp quần chúng nhận thức như thế nào?",
        options: [
          "Mơ hồ về chính sách",
          "Đầy đủ, đúng đắn về đường lối, chính sách và pháp luật",
          "Chỉ cần biết giáo lý tôn giáo",
          "Không cần hiểu pháp luật",
        ],
        correct: 1,
        fillAnswer:
          "Công tác tôn giáo cần làm cho quần chúng nhận thức đầy đủ, đúng đắn đường lối, chính sách của Đảng và ______ của Nhà nước.",
        answer: "pháp luật",
        fullFillAnswer:
          "Công tác tôn giáo phải làm cho quần chúng nhận thức đầy đủ, đúng đắn về đường lối, chính sách của Đảng và pháp luật của Nhà nước.",
      }),
      createQuestion({
        id: 9,
        term: "Thực hiện nghiêm chỉnh chính sách, pháp luật",
        definition:
          "Công tác tôn giáo hướng tới việc để nhân dân tích cực, nghiêm chỉnh thực hiện đường lối, chính sách, pháp luật.",
        question:
          "Kết quả mong muốn của công tác tuyên truyền, vận động trong lĩnh vực tôn giáo là gì?",
        options: [
          "Người dân thờ ơ với pháp luật",
          "Nhân dân tích cực, nghiêm chỉnh thực hiện đường lối, chính sách, pháp luật",
          "Người dân chỉ chú ý phần lễ nghi",
          "Giảm trách nhiệm công dân",
        ],
        correct: 1,
        fillAnswer:
          "Công tác tôn giáo hướng tới việc để nhân dân tích cực, nghiêm chỉnh thực hiện đường lối, chính sách, ______.",
        answer: "pháp luật",
        fullFillAnswer:
          "Mục tiêu quan trọng của công tác tôn giáo là giúp nhân dân tích cực, nghiêm chỉnh thực hiện đường lối, chính sách và pháp luật.",
      }),
      createQuestion({
        id: 10,
        term: "Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị",
        definition:
          "Công tác tôn giáo liên quan nhiều lĩnh vực của đời sống xã hội nên là trách nhiệm của toàn bộ hệ thống chính trị.",
        question:
          "Theo quan điểm hiện nay, công tác tôn giáo là trách nhiệm của ai?",
        options: [
          "Chỉ cơ quan quản lý nhà nước",
          "Chỉ Mặt trận Tổ quốc",
          "Cả hệ thống chính trị",
          "Chỉ các tổ chức tôn giáo",
        ],
        correct: 2,
        fillAnswer: "Công tác tôn giáo là trách nhiệm của ______.",
        answer: "cả hệ thống chính trị",
        fullFillAnswer:
          "Do liên quan đến nhiều lĩnh vực của đời sống xã hội, công tác tôn giáo là trách nhiệm của cả hệ thống chính trị.",
      }),
      createQuestion({
        id: 11,
        term: "Liên quan đến nhiều lĩnh vực đời sống xã hội",
        definition:
          "Công tác tôn giáo liên quan đến nhiều cấp, nhiều ngành, nhiều địa bàn và nhiều lĩnh vực khác nhau.",
        question:
          "Vì sao công tác tôn giáo phải được xem là nhiệm vụ của cả hệ thống chính trị?",
        options: [
          "Vì chỉ liên quan đến hoạt động lễ hội",
          "Vì liên quan nhiều lĩnh vực, nhiều cấp, nhiều ngành, nhiều địa bàn",
          "Vì chỉ có ý nghĩa đối nội",
          "Vì chỉ liên quan đến chức sắc",
        ],
        correct: 1,
        fillAnswer:
          "Công tác tôn giáo liên quan đến nhiều lĩnh vực của đời sống xã hội, nhiều cấp, nhiều ngành, nhiều ______.",
        answer: "địa bàn",
        fullFillAnswer:
          "Công tác tôn giáo phải là trách nhiệm của cả hệ thống chính trị vì nó liên quan đến nhiều lĩnh vực, nhiều cấp, nhiều ngành và nhiều địa bàn.",
      }),
      createQuestion({
        id: 12,
        term: "Liên quan đến chính sách đối nội và đối ngoại",
        definition:
          "Công tác tôn giáo gắn với cả chính sách đối nội và đối ngoại của Đảng và Nhà nước.",
        question:
          "Công tác tôn giáo có liên quan đến những phương diện chính sách nào?",
        options: [
          "Chỉ đối nội",
          "Chỉ đối ngoại",
          "Cả đối nội và đối ngoại",
          "Không liên quan đến chính sách nào",
        ],
        correct: 2,
        fillAnswer:
          "Công tác tôn giáo liên quan đến chính sách đối nội và ______ của Đảng, Nhà nước.",
        answer: "đối ngoại",
        fullFillAnswer:
          "Một điểm quan trọng là công tác tôn giáo liên quan đến cả chính sách đối nội và đối ngoại của Đảng và Nhà nước.",
      }),
      createQuestion({
        id: 13,
        term: "Không chỉ liên quan đến tín đồ và chức sắc",
        definition:
          "Công tác tôn giáo không chỉ liên quan đến quần chúng tín đồ, chức sắc mà còn gắn với đấu tranh chống lợi dụng tôn giáo.",
        question: "Công tác tôn giáo không chỉ liên quan đến đối tượng nào?",
        options: [
          "Quần chúng tín đồ và chức sắc",
          "Chỉ cán bộ quản lý",
          "Chỉ lực lượng an ninh",
          "Chỉ người không có đạo",
        ],
        correct: 0,
        fillAnswer:
          "Công tác tôn giáo không chỉ liên quan đến quần chúng tín đồ, chức sắc mà còn gắn với công tác ______.",
        answer: "đấu tranh",
        fullFillAnswer:
          "Công tác tôn giáo không chỉ liên quan đến quần chúng tín đồ và chức sắc, mà còn gắn với công tác đấu tranh chống lợi dụng tôn giáo.",
      }),
      createQuestion({
        id: 14,
        term: "Đấu tranh với âm mưu lợi dụng tôn giáo",
        definition:
          "Công tác tôn giáo gắn liền với việc đấu tranh với âm mưu, hoạt động lợi dụng tôn giáo gây phương hại đến lợi ích Tổ quốc, dân tộc.",
        question: "Một nội dung quan trọng gắn với công tác tôn giáo là gì?",
        options: [
          "Đấu tranh với hoạt động lợi dụng tôn giáo gây phương hại đến lợi ích Tổ quốc, dân tộc",
          "Khuyến khích mọi hoạt động không kiểm soát",
          "Tách tôn giáo khỏi xã hội bằng mệnh lệnh",
          "Giảm quản lý nhà nước",
        ],
        correct: 0,
        fillAnswer:
          "Công tác tôn giáo gắn với đấu tranh chống hoạt động ______ tôn giáo gây phương hại đến lợi ích Tổ quốc, dân tộc.",
        answer: "lợi dụng",
        fullFillAnswer:
          "Công tác tôn giáo luôn gắn liền với việc đấu tranh chống những âm mưu, hoạt động lợi dụng tôn giáo gây phương hại đến lợi ích Tổ quốc và dân tộc.",
      }),
      createQuestion({
        id: 15,
        term: "Vai trò của hệ thống tổ chức đảng, chính quyền, Mặt trận và đoàn thể",
        definition:
          "Làm tốt công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị gồm tổ chức đảng, chính quyền, Mặt trận Tổ quốc và các đoàn thể.",
        question:
          "Những lực lượng nào cùng tham gia thực hiện công tác tôn giáo?",
        options: [
          "Chỉ chính quyền địa phương",
          "Chỉ tổ chức tôn giáo",
          "Tổ chức đảng, chính quyền, Mặt trận Tổ quốc và các đoàn thể chính trị",
          "Chỉ cơ quan an ninh",
        ],
        correct: 2,
        fillAnswer:
          "Làm tốt công tác tôn giáo là trách nhiệm của tổ chức đảng, chính quyền, Mặt trận Tổ quốc và các ______ chính trị.",
        answer: "đoàn thể",
        fullFillAnswer:
          "Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị, gồm tổ chức đảng, chính quyền, Mặt trận Tổ quốc và các đoàn thể chính trị.",
      }),
      createQuestion({
        id: 16,
        term: "Củng cố tổ chức bộ máy",
        definition:
          "Cần củng cố và kiện toàn tổ chức bộ máy làm công tác tôn giáo các cấp.",
        question:
          "Yêu cầu nào được đặt ra đối với bộ máy làm công tác tôn giáo?",
        options: [
          "Giảm hẳn bộ máy chuyên trách",
          "Củng cố và kiện toàn tổ chức bộ máy",
          "Chỉ giao nhiệm vụ cho cấp trung ương",
          "Không cần tổ chức ổn định",
        ],
        correct: 1,
        fillAnswer:
          "Cần củng cố và kiện toàn tổ chức ______ làm công tác tôn giáo các cấp.",
        answer: "bộ máy",
        fullFillAnswer:
          "Một yêu cầu quan trọng là phải củng cố và kiện toàn tổ chức bộ máy làm công tác tôn giáo ở các cấp.",
      }),
      createQuestion({
        id: 17,
        term: "Đội ngũ cán bộ chuyên trách",
        definition:
          "Cần kiện toàn đội ngũ cán bộ chuyên trách làm công tác tôn giáo.",
        question:
          "Điều kiện nào quan trọng để thực hiện tốt công tác tôn giáo?",
        options: [
          "Không cần cán bộ chuyên trách",
          "Chỉ dùng cán bộ kiêm nhiệm",
          "Kiện toàn đội ngũ cán bộ chuyên trách",
          "Chỉ dựa vào tổ chức tôn giáo",
        ],
        correct: 2,
        fillAnswer:
          "Cần củng cố và kiện toàn đội ngũ ______ làm công tác tôn giáo các cấp.",
        answer: "cán bộ chuyên trách",
        fullFillAnswer:
          "Muốn làm tốt công tác tôn giáo cần kiện toàn đội ngũ cán bộ chuyên trách ở các cấp.",
      }),
      createQuestion({
        id: 18,
        term: "Tăng cường quản lý nhà nước",
        definition:
          "Cần tăng cường công tác quản lý nhà nước đối với các tôn giáo.",
        question:
          "Theo nội dung bài học, Nhà nước cần làm gì đối với các tôn giáo?",
        options: [
          "Buông lỏng quản lý hoàn toàn",
          "Tăng cường quản lý nhà nước đối với các tôn giáo",
          "Chỉ quản lý các tôn giáo lớn",
          "Không quản lý hoạt động tôn giáo",
        ],
        correct: 1,
        fillAnswer:
          "Cần tăng cường công tác ______ nhà nước đối với các tôn giáo.",
        answer: "quản lý",
        fullFillAnswer:
          "Theo nội dung bài học, cần tăng cường công tác quản lý nhà nước đối với các tôn giáo.",
      }),
      createQuestion({
        id: 19,
        term: "Kết hợp bảo đảm quyền tự do và đấu tranh chống lợi dụng",
        definition:
          "Quản lý nhà nước trong lĩnh vực tôn giáo phải đi đôi với đấu tranh chống việc lợi dụng tôn giáo.",
        question:
          "Ý nào thể hiện đúng yêu cầu của quản lý nhà nước trong lĩnh vực tôn giáo?",
        options: [
          "Chỉ quản lý hành chính, không cần đấu tranh",
          "Chỉ đấu tranh mà không bảo đảm quyền tự do",
          "Vừa bảo đảm quyền tự do tín ngưỡng, vừa đấu tranh chống lợi dụng tôn giáo",
          "Không cần phân biệt hoạt động hợp pháp hay trái pháp luật",
        ],
        correct: 2,
        fillAnswer:
          "Quản lý nhà nước trong lĩnh vực tôn giáo phải đi đôi với đấu tranh chống việc ______ tôn giáo.",
        answer: "lợi dụng",
        fullFillAnswer:
          "Yêu cầu đặt ra là vừa bảo đảm quyền tự do tín ngưỡng, tôn giáo, vừa đấu tranh chống việc lợi dụng tôn giáo để gây phương hại đến lợi ích quốc gia.",
      }),
      createQuestion({
        id: 20,
        term: "Mục tiêu bảo vệ lợi ích Tổ quốc và dân tộc",
        definition:
          "Đấu tranh trong công tác tôn giáo nhằm bảo vệ lợi ích của Tổ quốc và dân tộc.",
        question:
          "Công tác đấu tranh với hoạt động lợi dụng tôn giáo nhằm mục tiêu gì?",
        options: [
          "Bảo vệ lợi ích Tổ quốc và dân tộc",
          "Thu hẹp quyền tự do của công dân",
          "Xóa bỏ toàn bộ sinh hoạt tôn giáo",
          "Chỉ bảo vệ quyền lợi của một nhóm người",
        ],
        correct: 0,
        fillAnswer:
          "Đấu tranh với hoạt động lợi dụng tôn giáo nhằm bảo vệ lợi ích của ______ và dân tộc.",
        answer: "Tổ quốc",
        fullFillAnswer:
          "Mục tiêu của việc đấu tranh chống lợi dụng tôn giáo là bảo vệ lợi ích của Tổ quốc và dân tộc.",
      }),
    ],
  },
  {
    id: 110024,
    title: "Phần 4: Theo đạo, truyền đạo và những điều nghiêm cấm",
    description: "Theo đạo, truyền đạo và những điều bị nghiêm cấm",
    icon: "📘",
    questions: [
      createQuestion({
        id: 1,
        term: "Quyền tự do hành đạo",
        definition:
          "Mọi tín đồ đều có quyền tự do hành đạo theo quy định của pháp luật.",
        question: "Theo nội dung bài học, mọi tín đồ ở Việt Nam có quyền gì?",
        options: [
          "Không được hành đạo",
          "Được tự do hành đạo theo quy định của pháp luật",
          "Chỉ được hành đạo ngoài gia đình",
          "Chỉ được hành đạo khi có tổ chức nước ngoài bảo trợ",
        ],
        correct: 1,
        fillAnswer:
          "Mọi tín đồ đều có quyền tự do ______ theo quy định của pháp luật.",
        answer: "hành đạo",
        fullFillAnswer:
          "Theo nội dung bài học, mọi tín đồ đều có quyền tự do hành đạo theo quy định của pháp luật.",
      }),
      createQuestion({
        id: 2,
        term: "Hành đạo tại gia đình",
        definition: "Tín đồ có quyền hành đạo tại gia đình.",
        question:
          "Một trong những địa điểm hợp pháp để tín đồ thực hiện quyền hành đạo là ở đâu?",
        options: [
          "Chỉ tại nơi công cộng bất kỳ",
          "Tại gia đình",
          "Chỉ ở nước ngoài",
          "Chỉ ở nơi không đăng ký",
        ],
        correct: 1,
        fillAnswer: "Tín đồ có quyền hành đạo tại ______.",
        answer: "gia đình",
        fullFillAnswer:
          "Theo quy định, tín đồ có quyền tự do hành đạo tại gia đình.",
      }),
      createQuestion({
        id: 3,
        term: "Hành đạo tại cơ sở thờ tự hợp pháp",
        definition: "Tín đồ có quyền hành đạo tại cơ sở thờ tự hợp pháp.",
        question:
          "Ngoài gia đình, tín đồ còn có quyền hành đạo ở đâu theo pháp luật?",
        options: [
          "Tại cơ sở thờ tự hợp pháp",
          "Ở bất kỳ địa điểm tự phát nào",
          "Chỉ trong không gian mạng",
          "Chỉ trong dịp lễ lớn",
        ],
        correct: 0,
        fillAnswer: "Tín đồ có quyền hành đạo tại gia đình và ______ hợp pháp.",
        answer: "cơ sở thờ tự",
        fullFillAnswer:
          "Quyền hành đạo của tín đồ được thực hiện tại gia đình và cơ sở thờ tự hợp pháp.",
      }),
      createQuestion({
        id: 4,
        term: "Tổ chức tôn giáo được Nhà nước thừa nhận",
        definition:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo pháp luật.",
        question:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận có quyền như thế nào?",
        options: [
          "Không được hoạt động công khai",
          "Được hoạt động theo pháp luật",
          "Chỉ được tồn tại về mặt hình thức",
          "Không được pháp luật bảo vệ",
        ],
        correct: 1,
        fillAnswer:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo ______.",
        answer: "pháp luật",
        fullFillAnswer:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo pháp luật.",
      }),
      createQuestion({
        id: 5,
        term: "Được pháp luật bảo hộ",
        definition:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận còn được pháp luật bảo hộ.",
        question:
          "Địa vị pháp lý của tổ chức tôn giáo được Nhà nước thừa nhận được thể hiện thế nào?",
        options: [
          "Được hoạt động theo pháp luật và được pháp luật bảo hộ",
          "Chỉ được bảo hộ về mặt tinh thần",
          "Không được bảo vệ bởi pháp luật",
          "Chỉ được phép sinh hoạt nội bộ",
        ],
        correct: 0,
        fillAnswer:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo pháp luật và được ______ bảo hộ.",
        answer: "pháp luật",
        fullFillAnswer:
          "Khi được Nhà nước thừa nhận, các tổ chức tôn giáo được hoạt động theo pháp luật và được pháp luật bảo hộ.",
      }),
      createQuestion({
        id: 6,
        term: "Theo đạo phải tuân thủ Hiến pháp và pháp luật",
        definition:
          "Việc theo đạo và các hoạt động tôn giáo khác phải tuân thủ Hiến pháp và pháp luật.",
        question: "Nguyên tắc nào phải được bảo đảm khi công dân theo đạo?",
        options: [
          "Chỉ cần theo giáo luật",
          "Tuân thủ Hiến pháp và pháp luật",
          "Không cần bất kỳ quy định nào",
          "Chỉ phụ thuộc vào cá nhân",
        ],
        correct: 1,
        fillAnswer: "Việc theo đạo phải tuân thủ ______ và pháp luật.",
        answer: "Hiến pháp",
        fullFillAnswer:
          "Theo đạo là quyền của công dân nhưng phải tuân thủ Hiến pháp và pháp luật.",
      }),
      createQuestion({
        id: 7,
        term: "Truyền đạo phải tuân thủ Hiến pháp và pháp luật",
        definition:
          "Việc truyền đạo và các hoạt động tôn giáo khác đều phải tuân thủ Hiến pháp và pháp luật.",
        question: "Nguyên tắc nào phải được bảo đảm khi truyền đạo?",
        options: [
          "Tự do tuyệt đối, không cần quản lý",
          "Tuân thủ Hiến pháp và pháp luật",
          "Chỉ cần theo giáo luật riêng",
          "Không chịu bất kỳ ràng buộc nào",
        ],
        correct: 1,
        fillAnswer:
          "Việc truyền đạo cũng như mọi hoạt động tôn giáo khác đều phải tuân thủ ______ và pháp luật.",
        answer: "Hiến pháp",
        fullFillAnswer:
          "Truyền đạo là hoạt động phải diễn ra trong khuôn khổ Hiến pháp và pháp luật.",
      }),
      createQuestion({
        id: 8,
        term: "Không được lợi dụng tôn giáo để tuyên truyền tà đạo",
        definition:
          "Pháp luật nghiêm cấm việc lợi dụng tôn giáo để tuyên truyền tà đạo.",
        question: "Hành vi nào sau đây bị nghiêm cấm trong hoạt động tôn giáo?",
        options: [
          "Tuyên truyền tà đạo",
          "Hành đạo đúng pháp luật",
          "Sinh hoạt tại cơ sở hợp pháp",
          "Giữ gìn giá trị tốt đẹp",
        ],
        correct: 0,
        fillAnswer: "Không được lợi dụng tôn giáo để tuyên truyền ______.",
        answer: "tà đạo",
        fullFillAnswer:
          "Một hành vi bị nghiêm cấm là lợi dụng tôn giáo để tuyên truyền tà đạo.",
      }),
      createQuestion({
        id: 9,
        term: "Không được lợi dụng tôn giáo để hoạt động mê tín dị đoan",
        definition:
          "Nhà nước nghiêm cấm việc lợi dụng tôn giáo để hoạt động mê tín dị đoan.",
        question:
          "Hành vi nào bị pháp luật nghiêm cấm trong sinh hoạt tôn giáo?",
        options: [
          "Bảo tồn giá trị văn hóa tốt đẹp",
          "Lợi dụng tôn giáo để hoạt động mê tín dị đoan",
          "Sinh hoạt tại gia đình hợp pháp",
          "Thực hiện nghi lễ đúng quy định",
        ],
        correct: 1,
        fillAnswer: "Không được lợi dụng tôn giáo để hoạt động ______.",
        answer: "mê tín dị đoan",
        fullFillAnswer:
          "Lợi dụng tôn giáo để hoạt động mê tín dị đoan là hành vi bị nghiêm cấm.",
      }),
      createQuestion({
        id: 10,
        term: "Không được ép buộc người dân theo đạo",
        definition: "Pháp luật nghiêm cấm việc ép buộc người dân theo đạo.",
        question:
          "Điều nào sau đây bị nghiêm cấm khi thực hiện hoạt động tôn giáo?",
        options: [
          "Tự nguyện theo đạo",
          "Ép buộc người dân theo đạo",
          "Hành đạo tại cơ sở hợp pháp",
          "Tìm hiểu giáo lý",
        ],
        correct: 1,
        fillAnswer: "Không được ______ người dân theo đạo.",
        answer: "ép buộc",
        fullFillAnswer:
          "Việc ép buộc người dân theo đạo là hành vi bị pháp luật nghiêm cấm.",
      }),
      createQuestion({
        id: 11,
        term: "Nghiêm cấm tổ chức truyền đạo trái phép",
        definition: "Nhà nước nghiêm cấm các tổ chức truyền đạo trái phép.",
        question:
          "Đối tượng nào bị nghiêm cấm nếu hoạt động truyền đạo trái phép?",
        options: [
          "Các tổ chức truyền đạo trái phép",
          "Mọi tín đồ hành đạo hợp pháp",
          "Các cơ sở thờ tự hợp pháp",
          "Mọi sinh hoạt tôn giáo",
        ],
        correct: 0,
        fillAnswer: "Nhà nước nghiêm cấm các tổ chức truyền đạo ______.",
        answer: "trái phép",
        fullFillAnswer:
          "Theo chính sách hiện hành, các tổ chức truyền đạo trái phép là đối tượng bị nghiêm cấm.",
      }),
      createQuestion({
        id: 12,
        term: "Nghiêm cấm người truyền đạo trái phép",
        definition:
          "Nhà nước nghiêm cấm người truyền đạo trái phép, vi phạm pháp luật.",
        question: "Ai bị nghiêm cấm nếu thực hiện truyền đạo trái pháp luật?",
        options: [
          "Người truyền đạo trái phép",
          "Người hành đạo đúng pháp luật",
          "Tín đồ sinh hoạt tại gia đình",
          "Người nghiên cứu tôn giáo",
        ],
        correct: 0,
        fillAnswer: "Nhà nước nghiêm cấm ______ truyền đạo trái phép.",
        answer: "người",
        fullFillAnswer:
          "Không chỉ tổ chức mà cả người truyền đạo trái phép cũng là đối tượng bị nghiêm cấm theo pháp luật.",
      }),
      createQuestion({
        id: 13,
        term: "Nghiêm cấm cách thức truyền đạo trái phép",
        definition:
          "Nhà nước nghiêm cấm các cách thức truyền đạo trái phép, vi phạm quy định của pháp luật.",
        question:
          "Ngoài tổ chức và người truyền đạo, điều gì nữa bị nghiêm cấm?",
        options: [
          "Các cách thức truyền đạo trái phép",
          "Mọi hình thức tuyên truyền đúng pháp luật",
          "Mọi sinh hoạt tín ngưỡng",
          "Mọi hình thức học tập tôn giáo",
        ],
        correct: 0,
        fillAnswer: "Nhà nước nghiêm cấm các ______ truyền đạo trái phép.",
        answer: "cách thức",
        fullFillAnswer:
          "Bên cạnh tổ chức và người truyền đạo trái phép, các cách thức truyền đạo trái phép cũng bị nghiêm cấm.",
      }),
      createQuestion({
        id: 14,
        term: "Vi phạm Hiến pháp và pháp luật",
        definition:
          "Truyền đạo trái phép là hành vi vi phạm Hiến pháp và pháp luật.",
        question: "Truyền đạo trái phép có bản chất pháp lý như thế nào?",
        options: [
          "Là quyền tự do tuyệt đối",
          "Là hành vi vi phạm Hiến pháp và pháp luật",
          "Là hoạt động luôn được bảo hộ",
          "Là hình thức sinh hoạt được khuyến khích",
        ],
        correct: 1,
        fillAnswer:
          "Truyền đạo trái phép là hành vi vi phạm ______ và pháp luật.",
        answer: "Hiến pháp",
        fullFillAnswer:
          "Các hoạt động truyền đạo trái phép đều bị xem là vi phạm Hiến pháp và pháp luật.",
      }),
      createQuestion({
        id: 15,
        term: "Phân biệt quyền tự do với hành vi lợi dụng tôn giáo",
        definition:
          "Chính sách hiện hành bảo đảm quyền tự do tín ngưỡng, tôn giáo nhưng kiên quyết ngăn chặn việc lợi dụng tôn giáo.",
        question:
          "Điểm nào thể hiện đúng sự kết hợp giữa bảo đảm quyền tự do và quản lý nhà nước trong lĩnh vực tôn giáo?",
        options: [
          "Cho phép mọi hoạt động tôn giáo không giới hạn",
          "Cấm toàn bộ hoạt động theo đạo",
          "Bảo đảm quyền hành đạo hợp pháp nhưng nghiêm cấm lợi dụng tôn giáo để vi phạm pháp luật",
          "Chỉ quản lý với tôn giáo du nhập",
        ],
        correct: 2,
        fillAnswer:
          "Chính sách hiện hành bảo đảm quyền tự do tín ngưỡng, tôn giáo nhưng nghiêm cấm ______ tôn giáo để vi phạm pháp luật.",
        answer: "lợi dụng",
        fullFillAnswer:
          "Tinh thần chung của chính sách là bảo đảm quyền tự do tín ngưỡng, tôn giáo nhưng nghiêm cấm việc lợi dụng tôn giáo để vi phạm pháp luật.",
      }),
      createQuestion({
        id: 16,
        term: "Hành đạo hợp pháp khác với truyền đạo trái phép",
        definition:
          "Pháp luật bảo đảm hành đạo hợp pháp nhưng nghiêm cấm truyền đạo trái phép.",
        question: "Nhận định nào sau đây là đúng?",
        options: [
          "Hành đạo hợp pháp và truyền đạo trái phép đều được bảo hộ như nhau",
          "Hành đạo hợp pháp được bảo đảm, còn truyền đạo trái phép bị nghiêm cấm",
          "Chỉ truyền đạo mới được pháp luật bảo hộ",
          "Mọi hoạt động tôn giáo đều bị cấm",
        ],
        correct: 1,
        fillAnswer:
          "Hành đạo hợp pháp được bảo đảm, còn truyền đạo ______ bị nghiêm cấm.",
        answer: "trái phép",
        fullFillAnswer:
          "Chính sách của Nhà nước phân biệt rõ giữa quyền hành đạo hợp pháp và hành vi truyền đạo trái phép bị nghiêm cấm.",
      }),
      createQuestion({
        id: 17,
        term: "Tự do tín ngưỡng không đồng nghĩa tự do vô hạn",
        definition:
          "Quyền tự do tín ngưỡng, tôn giáo luôn gắn với việc tuân thủ Hiến pháp và pháp luật.",
        question: "Quyền tự do tín ngưỡng, tôn giáo cần được hiểu như thế nào?",
        options: [
          "Là quyền tự do vô hạn, không ràng buộc pháp luật",
          "Là quyền tự do trong khuôn khổ Hiến pháp và pháp luật",
          "Chỉ dành cho chức sắc",
          "Chỉ dành cho tổ chức tôn giáo lớn",
        ],
        correct: 1,
        fillAnswer:
          "Quyền tự do tín ngưỡng, tôn giáo là quyền tự do trong khuôn khổ ______ và pháp luật.",
        answer: "Hiến pháp",
        fullFillAnswer:
          "Tự do tín ngưỡng, tôn giáo là quyền của công dân nhưng phải được thực hiện trong khuôn khổ Hiến pháp và pháp luật.",
      }),
      createQuestion({
        id: 18,
        term: "Tổ chức được thừa nhận mới hoạt động theo pháp luật",
        definition:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận mới được hoạt động theo pháp luật và được bảo hộ.",
        question:
          "Điều kiện pháp lý quan trọng để tổ chức tôn giáo hoạt động ổn định là gì?",
        options: [
          "Được Nhà nước thừa nhận",
          "Có càng nhiều tín đồ càng tốt",
          "Có liên hệ quốc tế",
          "Không cần sự công nhận nào",
        ],
        correct: 0,
        fillAnswer:
          "Các tổ chức tôn giáo được ______ thừa nhận được hoạt động theo pháp luật và được bảo hộ.",
        answer: "Nhà nước",
        fullFillAnswer:
          "Để hoạt động theo pháp luật và được pháp luật bảo hộ, tổ chức tôn giáo phải được Nhà nước thừa nhận.",
      }),
      createQuestion({
        id: 19,
        term: "Nghiêm cấm vi phạm trong hoạt động truyền đạo",
        definition:
          "Việc truyền đạo phải đúng pháp luật, còn mọi hình thức truyền đạo trái phép đều bị nghiêm cấm.",
        question:
          "Nhà nước xử lý như thế nào đối với các hình thức truyền đạo vi phạm pháp luật?",
        options: [
          "Khuyến khích mở rộng",
          "Không quan tâm",
          "Nghiêm cấm",
          "Tùy từng nơi tự quyết",
        ],
        correct: 2,
        fillAnswer:
          "Các hình thức truyền đạo vi phạm quy định của pháp luật đều bị ______.",
        answer: "nghiêm cấm",
        fullFillAnswer:
          "Nhà nước nghiêm cấm các hình thức truyền đạo trái phép, vi phạm quy định của Hiến pháp và pháp luật.",
      }),
      createQuestion({
        id: 20,
        term: "Bảo đảm quyền và giữ vững trật tự pháp luật",
        definition:
          "Chính sách tôn giáo kết hợp bảo đảm quyền tự do của công dân với yêu cầu giữ vững trật tự, kỷ cương pháp luật.",
        question:
          "Tinh thần chung của chính sách về theo đạo, truyền đạo hiện nay là gì?",
        options: [
          "Chỉ quan tâm đến quyền mà không quản lý",
          "Chỉ quản lý mà không bảo đảm quyền",
          "Bảo đảm quyền tự do tín ngưỡng, tôn giáo đồng thời giữ vững kỷ cương pháp luật",
          "Xóa bỏ mọi hoạt động tôn giáo",
        ],
        correct: 2,
        fillAnswer:
          "Chính sách hiện hành vừa bảo đảm quyền tự do tín ngưỡng, tôn giáo vừa giữ vững ______ pháp luật.",
        answer: "kỷ cương",
        fullFillAnswer:
          "Tinh thần chung của chính sách là bảo đảm quyền tự do tín ngưỡng, tôn giáo của công dân đồng thời giữ vững kỷ cương pháp luật.",
      }),
    ],
  },
];
