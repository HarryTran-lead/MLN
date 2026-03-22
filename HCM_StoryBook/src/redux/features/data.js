export const DATASET_VERSION = 9;

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
    description:
      "Ôn tập các nét nổi bật của đời sống tôn giáo Việt Nam hiện nay.",
    icon: "⛪",
    questions: [
      createQuestion({
        id: 1,
        term: "Việt Nam là quốc gia có nhiều tôn giáo",
        definition:
          "Hiện nay, nước ta có 43 tổ chức thuộc 16 tôn giáo đã được công nhận và cấp đăng ký hoạt động.",
        question:
          "Theo nội dung học tập, hiện nay Việt Nam có bao nhiêu tổ chức thuộc bao nhiêu tôn giáo đã được công nhận và cấp đăng ký hoạt động?",
        options: [
          "43 tổ chức thuộc 16 tôn giáo",
          "16 tổ chức thuộc 43 tôn giáo",
          "57 tổ chức thuộc 29 tôn giáo",
          "29 tổ chức thuộc 57 tôn giáo",
        ],
        correct: 0,
        fillAnswer:
          "Hiện nay, Việt Nam có ______ đã được công nhận và cấp đăng ký hoạt động.",
        answer: "43 tổ chức thuộc 16 tôn giáo",
        fullFillAnswer:
          "Một đặc điểm nổi bật của Việt Nam là có 43 tổ chức thuộc 16 tôn giáo đã được công nhận và cấp đăng ký hoạt động.",
      }),
      createQuestion({
        id: 2,
        term: "Tôn giáo du nhập và tôn giáo nội sinh",
        definition:
          "Ở Việt Nam có cả các tôn giáo du nhập từ bên ngoài và các tôn giáo hình thành trong nước.",
        question:
          "Cách phân loại nào phản ánh đúng nguồn gốc tôn giáo ở Việt Nam?",
        options: [
          "Chỉ có tôn giáo du nhập",
          "Chỉ có tôn giáo nội sinh",
          "Có cả tôn giáo du nhập và tôn giáo nội sinh",
          "Không có sự khác nhau về nguồn gốc",
        ],
        correct: 2,
        fillAnswer:
          "Ở Việt Nam có cả ______ như Phật giáo, Công giáo và các tôn giáo nội sinh như Cao Đài, Hòa Hảo.",
        answer: "tôn giáo du nhập từ bên ngoài",
        fullFillAnswer:
          "Đời sống tôn giáo Việt Nam bao gồm cả tôn giáo du nhập từ bên ngoài và tôn giáo nội sinh hình thành trong nước.",
      }),
      createQuestion({
        id: 3,
        term: "Đa dạng, đan xen, hòa bình",
        definition:
          "Các tôn giáo ở Việt Nam cùng tồn tại trên nhiều địa bàn, tôn trọng niềm tin của nhau và không có chiến tranh tôn giáo.",
        question:
          "Đâu là nhận định đúng về mối quan hệ giữa các tôn giáo ở Việt Nam?",
        options: [
          "Thường xuyên xảy ra chiến tranh tôn giáo",
          "Chỉ tồn tại riêng biệt, không đan xen",
          "Đa dạng, đan xen và chung sống hòa bình",
          "Luôn xung đột về giáo lý và địa bàn",
        ],
        correct: 2,
        fillAnswer:
          "Các tôn giáo ở Việt Nam đa dạng, đan xen, chung sống ______ và không có xung đột, chiến tranh tôn giáo.",
        answer: "hòa bình",
        fullFillAnswer:
          "Thực tế ở Việt Nam cho thấy các tôn giáo đan xen và chung sống hòa bình, không có chiến tranh tôn giáo.",
      }),
      createQuestion({
        id: 4,
        term: "Tín đồ phần lớn là nhân dân lao động",
        definition:
          "Tín đồ các tôn giáo Việt Nam có thành phần đa dạng nhưng chủ yếu là người lao động và có lòng yêu nước.",
        question:
          "Tín đồ các tôn giáo ở Việt Nam phần lớn thuộc thành phần nào?",
        options: [
          "Tầng lớp quý tộc",
          "Nhân dân lao động",
          "Giới tư bản nước ngoài",
          "Một nhóm xã hội biệt lập",
        ],
        correct: 1,
        fillAnswer:
          "Tín đồ các tôn giáo ở Việt Nam có thành phần đa dạng, nhưng chủ yếu là ______.",
        answer: "nhân dân lao động",
        fullFillAnswer:
          "Phần lớn tín đồ các tôn giáo ở Việt Nam là nhân dân lao động và có tinh thần yêu nước, gắn bó với dân tộc.",
      }),
      createQuestion({
        id: 5,
        term: "Vai trò của chức sắc tôn giáo",
        definition:
          "Chức sắc có vai trò truyền bá giáo lý, tổ chức nghi lễ, quản lý giáo hội và chăm lo đời sống tâm linh cho tín đồ.",
        question:
          "Vai trò nào sau đây phản ánh đúng vị trí của chức sắc tôn giáo?",
        options: [
          "Chỉ tham gia hoạt động kinh tế",
          "Chỉ đại diện về mặt hành chính",
          "Truyền bá giáo lý, quản lý tổ chức và chăm lo đời sống tâm linh",
          "Không có ảnh hưởng đối với tín đồ",
        ],
        correct: 2,
        fillAnswer:
          "Chức sắc tôn giáo có vai trò truyền bá giáo lý, giáo luật, lễ nghi, quản lý tổ chức và ______ cho tín đồ.",
        answer: "chăm lo đến đời sống tâm linh",
        fullFillAnswer:
          "Trong giáo hội, chức sắc vừa truyền bá giáo lý vừa quản lý tổ chức và chăm lo đời sống tâm linh của tín đồ.",
      }),
      createQuestion({
        id: 6,
        term: "Quan hệ quốc tế của các tôn giáo",
        definition:
          "Các tôn giáo ở Việt Nam đều có những mối liên hệ nhất định với tổ chức, cá nhân tôn giáo ở nước ngoài.",
        question:
          "Khi giải quyết vấn đề tôn giáo ở Việt Nam cần kết hợp yêu cầu nào?",
        options: [
          "Đóng cửa hoàn toàn mọi quan hệ quốc tế",
          "Chỉ mở rộng giao lưu mà không cần quản lý",
          "Mở rộng giao lưu hợp tác quốc tế đi đôi với bảo đảm độc lập, chủ quyền",
          "Để các tổ chức nước ngoài tự do can thiệp",
        ],
        correct: 2,
        fillAnswer:
          "Giải quyết vấn đề tôn giáo ở Việt Nam phải kết hợp mở rộng giao lưu hợp tác quốc tế với việc bảo đảm ______.",
        answer: "độc lập, chủ quyền",
        fullFillAnswer:
          "Mở rộng giao lưu quốc tế về tôn giáo phải luôn gắn với bảo đảm độc lập, chủ quyền và phòng ngừa sự lợi dụng từ bên ngoài.",
      }),
    ],
  },
  {
    id: 110022,
    title: "Phần 2: Chính sách của Đảng và Nhà nước",
    description:
      "Nắm những quan điểm nhất quán về tín ngưỡng, tôn giáo hiện nay.",
    icon: "⚖️",
    questions: [
      createQuestion({
        id: 1,
        term: "Tín ngưỡng, tôn giáo là nhu cầu tinh thần",
        definition:
          "Đảng khẳng định tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân và còn tồn tại lâu dài trong quá trình xây dựng chủ nghĩa xã hội.",
        question:
          "Đảng ta xác định tín ngưỡng, tôn giáo là gì đối với một bộ phận nhân dân?",
        options: [
          "Một hiện tượng cần xóa bỏ ngay bằng biện pháp hành chính",
          "Nhu cầu tinh thần và sẽ tồn tại lâu dài cùng dân tộc",
          "Hiện tượng hoàn toàn không liên quan đến xã hội",
          "Một yếu tố chỉ có ở vùng nông thôn",
        ],
        correct: 1,
        fillAnswer:
          "Đảng ta khẳng định tín ngưỡng, tôn giáo là ______ của một bộ phận nhân dân.",
        answer: "nhu cầu tinh thần",
        fullFillAnswer:
          "Quan điểm nhất quán của Đảng là tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân và sẽ tồn tại lâu dài cùng dân tộc.",
      }),
      createQuestion({
        id: 2,
        term: "Quyền tự do tín ngưỡng, tôn giáo",
        definition:
          "Nhà nước tôn trọng và bảo đảm quyền theo hoặc không theo tín ngưỡng, tôn giáo nào của công dân.",
        question:
          "Quyền nào sau đây được chính sách hiện hành bảo đảm đối với công dân?",
        options: [
          "Chỉ được theo một tôn giáo duy nhất",
          "Chỉ được hành đạo trong khu vực riêng",
          "Được theo hoặc không theo tín ngưỡng, tôn giáo nào",
          "Phải đăng ký niềm tin cá nhân với địa phương",
        ],
        correct: 2,
        fillAnswer:
          "Chính sách hiện hành bảo đảm quyền theo hoặc không theo ______ nào.",
        answer: "một tín ngưỡng, tôn giáo",
        fullFillAnswer:
          "Công dân có quyền theo hoặc không theo một tín ngưỡng, tôn giáo nào; đó là quyền tự do tín ngưỡng, tôn giáo được pháp luật bảo đảm.",
      }),
      createQuestion({
        id: 3,
        term: "Bình đẳng trước pháp luật",
        definition:
          "Các tôn giáo hoạt động trong khuôn khổ pháp luật và bình đẳng trước pháp luật.",
        question:
          "Nguyên tắc nào điều chỉnh hoạt động của các tôn giáo ở Việt Nam?",
        options: [
          "Hoạt động ngoài khuôn khổ pháp luật",
          "Bình đẳng trước pháp luật và tuân thủ pháp luật",
          "Ưu tiên tuyệt đối cho một tôn giáo",
          "Không chịu sự quản lý của Nhà nước",
        ],
        correct: 1,
        fillAnswer:
          "Các tôn giáo hoạt động trong khuôn khổ pháp luật, ______ trước pháp luật.",
        answer: "bình đẳng",
        fullFillAnswer:
          "Mọi tôn giáo ở Việt Nam đều bình đẳng trước pháp luật và phải hoạt động trong khuôn khổ pháp luật.",
      }),
      createQuestion({
        id: 4,
        term: "Chính sách đại đoàn kết dân tộc",
        definition:
          "Đảng, Nhà nước chủ trương đoàn kết đồng bào theo các tôn giáo khác nhau và đồng bào không theo tôn giáo.",
        question:
          "Chính sách đại đoàn kết dân tộc trong lĩnh vực tôn giáo nhấn mạnh điều gì?",
        options: [
          "Tách riêng đồng bào có đạo khỏi cộng đồng",
          "Chỉ đoàn kết những người không theo tôn giáo",
          "Đoàn kết đồng bào theo đạo và không theo đạo",
          "Đặt tôn giáo lên trên lợi ích dân tộc",
        ],
        correct: 2,
        fillAnswer:
          "Đảng, Nhà nước thực hiện chính sách đại đoàn kết dân tộc, đoàn kết đồng bào theo tôn giáo và đồng bào ______.",
        answer: "không theo tôn giáo",
        fullFillAnswer:
          "Đại đoàn kết dân tộc trong lĩnh vực tôn giáo là đoàn kết đồng bào theo các tôn giáo khác nhau với đồng bào không theo tôn giáo.",
      }),
      createQuestion({
        id: 5,
        term: "Nghiêm cấm chia rẽ và phân biệt đối xử",
        definition:
          "Nhà nước nghiêm cấm mọi hành vi chia rẽ, phân biệt đối xử với công dân vì lý do tín ngưỡng, tôn giáo.",
        question:
          "Hành vi nào bị nghiêm cấm theo chính sách tôn giáo hiện nay?",
        options: [
          "Đoàn kết đồng bào các tôn giáo",
          "Tôn trọng quyền tự do tín ngưỡng",
          "Chia rẽ, phân biệt đối xử vì lý do tín ngưỡng, tôn giáo",
          "Sinh hoạt tôn giáo đúng pháp luật",
        ],
        correct: 2,
        fillAnswer:
          "Nhà nước nghiêm cấm mọi hành vi chia rẽ, ______ với công dân vì lý do tín ngưỡng, tôn giáo.",
        answer: "phân biệt đối xử",
        fullFillAnswer:
          "Chia rẽ và phân biệt đối xử vì lý do tín ngưỡng, tôn giáo là những hành vi bị nghiêm cấm theo chính sách hiện hành.",
      }),
      createQuestion({
        id: 6,
        term: "Giữ gìn giá trị truyền thống và ngăn lợi dụng tôn giáo",
        definition:
          "Chính sách vừa phát huy những giá trị tích cực của tín ngưỡng truyền thống, vừa nghiêm cấm lợi dụng tôn giáo để hoạt động trái pháp luật.",
        question:
          "Nhà nước chủ trương xử lý như thế nào đối với tín ngưỡng, tôn giáo?",
        options: [
          "Loại bỏ toàn bộ tập quán tín ngưỡng truyền thống",
          "Giữ gìn giá trị tích cực và nghiêm cấm lợi dụng tôn giáo để vi phạm pháp luật",
          "Chỉ quan tâm đến hoạt động lễ hội",
          "Không can thiệp khi có mê tín dị đoan",
        ],
        correct: 1,
        fillAnswer:
          "Nhà nước giữ gìn các giá trị tích cực của truyền thống thờ cúng tổ tiên, đồng thời nghiêm cấm ______ để hoạt động mê tín dị đoan và trái pháp luật.",
        answer: "lợi dụng tín ngưỡng, tôn giáo",
        fullFillAnswer:
          "Chính sách tôn giáo vừa trân trọng những giá trị văn hóa tích cực vừa kiên quyết ngăn chặn việc lợi dụng tín ngưỡng, tôn giáo để vi phạm pháp luật.",
      }),
    ],
  },
  {
    id: 110023,
    title: "Phần 3: Công tác tôn giáo",
    description:
      "Ôn tập nội dung cốt lõi, mục tiêu và lực lượng thực hiện công tác tôn giáo.",
    icon: "🤝",
    questions: [
      createQuestion({
        id: 1,
        term: "Nội dung cốt lõi của công tác tôn giáo",
        definition:
          "Công tác tôn giáo trước hết là công tác vận động quần chúng.",
        question: "Nội dung cốt lõi của công tác tôn giáo là gì?",
        options: [
          "Công tác tuyên truyền đối ngoại",
          "Công tác vận động quần chúng",
          "Công tác xây dựng cơ sở vật chất",
          "Công tác thống kê hành chính",
        ],
        correct: 1,
        fillAnswer:
          "Nội dung cốt lõi của công tác tôn giáo là công tác ______.",
        answer: "vận động quần chúng",
        fullFillAnswer:
          "Theo quan điểm chỉ đạo, công tác tôn giáo lấy công tác vận động quần chúng làm nội dung cốt lõi.",
      }),
      createQuestion({
        id: 2,
        term: "Mục tiêu của công tác vận động quần chúng",
        definition:
          "Mục tiêu là động viên đồng bào tôn giáo phát huy tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất đất nước.",
        question:
          "Công tác vận động quần chúng các tôn giáo nhằm động viên điều gì?",
        options: [
          "Tâm lý biệt lập với xã hội",
          "Tinh thần yêu nước và ý thức bảo vệ độc lập, thống nhất đất nước",
          "Tư tưởng chống đối chính quyền",
          "Hoạt động tôn giáo vượt ra ngoài pháp luật",
        ],
        correct: 1,
        fillAnswer:
          "Công tác vận động quần chúng các tôn giáo nhằm động viên đồng bào nêu cao tinh thần ______.",
        answer: "yêu nước",
        fullFillAnswer:
          "Mục tiêu của công tác vận động quần chúng các tôn giáo là phát huy tinh thần yêu nước và ý thức bảo vệ độc lập, thống nhất đất nước.",
      }),
      createQuestion({
        id: 3,
        term: "Phát triển vùng đồng bào có đạo",
        definition:
          "Muốn công tác tôn giáo hiệu quả cần phát triển kinh tế, xã hội, văn hóa, nâng cao đời sống mọi mặt cho đồng bào có đạo.",
        question:
          "Biện pháp quan trọng để nâng cao hiệu quả công tác tôn giáo là gì?",
        options: [
          "Tách riêng vùng đồng bào có đạo",
          "Hạn chế giáo dục ở vùng có đạo",
          "Phát triển kinh tế, xã hội, văn hóa ở vùng đồng bào tôn giáo",
          "Chỉ tập trung vào hoạt động nghi lễ",
        ],
        correct: 2,
        fillAnswer:
          "Cần đẩy mạnh phát triển kinh tế, xã hội, văn hóa vùng đồng bào theo các tôn giáo để nâng cao ______.",
        answer: "đời sống mọi mặt cho đồng bào",
        fullFillAnswer:
          "Phát triển kinh tế, xã hội, văn hóa ở vùng đồng bào tôn giáo là giải pháp quan trọng để nâng cao đời sống và củng cố khối đoàn kết.",
      }),
      createQuestion({
        id: 4,
        term: "Trách nhiệm của cả hệ thống chính trị",
        definition:
          "Công tác tôn giáo liên quan nhiều lĩnh vực nên là trách nhiệm của toàn bộ hệ thống chính trị.",
        question:
          "Theo quan điểm hiện nay, công tác tôn giáo là trách nhiệm của ai?",
        options: [
          "Chỉ cơ quan quản lý nhà nước",
          "Chỉ Mặt trận Tổ quốc",
          "Cả hệ thống chính trị",
          "Chỉ các tổ chức tôn giáo",
        ],
        correct: 2,
        fillAnswer:
          "Công tác tôn giáo là trách nhiệm của ______.",
        answer: "cả hệ thống chính trị",
        fullFillAnswer:
          "Do liên quan nhiều lĩnh vực của đời sống xã hội, công tác tôn giáo là trách nhiệm của cả hệ thống chính trị.",
      }),
      createQuestion({
        id: 5,
        term: "Tăng cường quản lý nhà nước",
        definition:
          "Cần tăng cường quản lý nhà nước đối với các tôn giáo và đấu tranh với hoạt động lợi dụng tôn giáo gây phương hại đến lợi ích Tổ quốc, dân tộc.",
        question:
          "Vì sao cần tăng cường công tác quản lý nhà nước đối với tôn giáo?",
        options: [
          "Để hạn chế mọi hình thức sinh hoạt tôn giáo",
          "Vì công tác tôn giáo liên quan nhiều lĩnh vực và cần ngăn chặn lợi dụng tôn giáo",
          "Để thay thế chức năng của tổ chức tôn giáo",
          "Vì tôn giáo không liên quan đến đối ngoại",
        ],
        correct: 1,
        fillAnswer:
          "Tăng cường quản lý nhà nước đối với tôn giáo nhằm đấu tranh với hoạt động ______ gây phương hại đến lợi ích Tổ quốc và dân tộc.",
        answer: "lợi dụng tôn giáo",
        fullFillAnswer:
          "Quản lý nhà nước trong lĩnh vực tôn giáo vừa bảo đảm quyền tự do tín ngưỡng, vừa ngăn chặn việc lợi dụng tôn giáo gây phương hại đến lợi ích quốc gia.",
      }),
      createQuestion({
        id: 6,
        term: "Củng cố bộ máy và cán bộ chuyên trách",
        definition:
          "Muốn làm tốt công tác tôn giáo cần kiện toàn tổ chức bộ máy và đội ngũ cán bộ chuyên trách các cấp.",
        question:
          "Yêu cầu nào được đặt ra đối với bộ máy làm công tác tôn giáo?",
        options: [
          "Giảm hẳn cán bộ chuyên trách",
          "Củng cố và kiện toàn tổ chức bộ máy, đội ngũ cán bộ chuyên trách",
          "Chỉ giao nhiệm vụ cho cấp trung ương",
          "Không cần đào tạo cán bộ chuyên môn",
        ],
        correct: 1,
        fillAnswer:
          "Cần củng cố và kiện toàn tổ chức bộ máy, đội ngũ ______ làm công tác tôn giáo các cấp.",
        answer: "cán bộ chuyên trách",
        fullFillAnswer:
          "Một điều kiện quan trọng để thực hiện tốt công tác tôn giáo là củng cố tổ chức bộ máy và đội ngũ cán bộ chuyên trách ở các cấp.",
      }),
    ],
  },
  {
    id: 110024,
    title: "Phần 4: Theo đạo, truyền đạo và những điều cấm",
    description:
      "Ôn tập quyền hành đạo hợp pháp và các hành vi bị nghiêm cấm.",
    icon: "📘",
    questions: [
      createQuestion({
        id: 1,
        term: "Quyền hành đạo của tín đồ",
        definition:
          "Mọi tín đồ có quyền tự do hành đạo tại gia đình và cơ sở thờ tự hợp pháp theo quy định của pháp luật.",
        question:
          "Mọi tín đồ ở Việt Nam có quyền tự do hành đạo ở đâu theo pháp luật?",
        options: [
          "Chỉ tại nơi do cá nhân tự lập",
          "Tại gia đình và cơ sở thờ tự hợp pháp",
          "Chỉ ngoài lãnh thổ Việt Nam",
          "Chỉ khi có tổ chức nước ngoài bảo trợ",
        ],
        correct: 1,
        fillAnswer:
          "Mọi tín đồ đều có quyền tự do hành đạo tại gia đình và ______ theo quy định của pháp luật.",
        answer: "cơ sở thờ tự hợp pháp",
        fullFillAnswer:
          "Quyền hành đạo của tín đồ được thực hiện tại gia đình và cơ sở thờ tự hợp pháp theo đúng quy định của pháp luật.",
      }),
      createQuestion({
        id: 2,
        term: "Tổ chức tôn giáo được pháp luật bảo hộ",
        definition:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo pháp luật và được pháp luật bảo hộ.",
        question:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận có địa vị pháp lý như thế nào?",
        options: [
          "Không được hoạt động công khai",
          "Được hoạt động theo pháp luật và được pháp luật bảo hộ",
          "Chỉ được tồn tại về mặt hình thức",
          "Chỉ được sinh hoạt trong phạm vi rất hẹp",
        ],
        correct: 1,
        fillAnswer:
          "Các tổ chức tôn giáo được Nhà nước thừa nhận được hoạt động theo pháp luật và được ______ bảo hộ.",
        answer: "pháp luật",
        fullFillAnswer:
          "Khi được Nhà nước thừa nhận, tổ chức tôn giáo được hoạt động theo pháp luật và được pháp luật bảo hộ.",
      }),
      createQuestion({
        id: 3,
        term: "Theo đạo và truyền đạo phải tuân thủ pháp luật",
        definition:
          "Mọi hoạt động theo đạo, truyền đạo đều phải tuân thủ Hiến pháp và pháp luật.",
        question:
          "Nguyên tắc nào phải được bảo đảm đối với việc theo đạo và truyền đạo?",
        options: [
          "Chỉ cần phù hợp với giáo luật",
          "Tuân thủ Hiến pháp và pháp luật",
          "Không cần đăng ký hay quản lý",
          "Do cá nhân tự quyết hoàn toàn",
        ],
        correct: 1,
        fillAnswer:
          "Việc theo đạo, truyền đạo cũng như mọi hoạt động tôn giáo khác đều phải tuân thủ ______.",
        answer: "Hiến pháp và pháp luật",
        fullFillAnswer:
          "Theo đạo và truyền đạo là quyền của công dân, nhưng mọi hoạt động đều phải diễn ra trong khuôn khổ Hiến pháp và pháp luật.",
      }),
      createQuestion({
        id: 4,
        term: "Nghiêm cấm lợi dụng tôn giáo",
        definition:
          "Không được lợi dụng tôn giáo để tuyên truyền tà đạo, mê tín dị đoan hoặc ép buộc người dân theo đạo.",
        question:
          "Hành vi nào sau đây bị nghiêm cấm trong hoạt động tôn giáo?",
        options: [
          "Sinh hoạt tín ngưỡng bình thường",
          "Tuyên truyền tà đạo, mê tín dị đoan và ép buộc người dân theo đạo",
          "Tham gia lễ nghi đúng pháp luật",
          "Bảo tồn giá trị truyền thống tốt đẹp",
        ],
        correct: 1,
        fillAnswer:
          "Không được lợi dụng tôn giáo để tuyên truyền tà đạo, hoạt động mê tín dị đoan và ______ người dân theo đạo.",
        answer: "ép buộc",
        fullFillAnswer:
          "Tuyên truyền tà đạo, mê tín dị đoan hay ép buộc người khác theo đạo đều là những hành vi bị pháp luật nghiêm cấm.",
      }),
      createQuestion({
        id: 5,
        term: "Truyền đạo trái phép",
        definition:
          "Nghiêm cấm các tổ chức truyền đạo, người truyền đạo và cách thức truyền đạo trái phép, vi phạm quy định của pháp luật.",
        question:
          "Nhà nước nghiêm cấm đối tượng và cách thức nào trong hoạt động truyền đạo?",
        options: [
          "Các hình thức truyền đạo hợp pháp",
          "Tổ chức, người truyền đạo và cách thức truyền đạo trái phép",
          "Hoạt động tôn giáo của tổ chức được thừa nhận",
          "Sinh hoạt tại cơ sở thờ tự hợp pháp",
        ],
        correct: 1,
        fillAnswer:
          "Nghiêm cấm các tổ chức truyền đạo, người truyền đạo và các cách thức truyền đạo ______.",
        answer: "trái phép",
        fullFillAnswer:
          "Truyền đạo trái phép, vi phạm Hiến pháp và pháp luật là hành vi bị nghiêm cấm trong chính sách tôn giáo hiện nay.",
      }),
      createQuestion({
        id: 6,
        term: "Phân biệt quyền tự do và hành vi bị cấm",
        definition:
          "Nhà nước bảo đảm quyền tự do tín ngưỡng, tôn giáo nhưng kiên quyết ngăn chặn việc lợi dụng tôn giáo để chống phá và vi phạm pháp luật.",
        question:
          "Điểm nào thể hiện đúng sự kết hợp giữa bảo đảm quyền tự do tôn giáo và quản lý nhà nước?",
        options: [
          "Cho phép mọi hoạt động tôn giáo không giới hạn",
          "Cấm toàn bộ việc truyền đạo",
          "Bảo đảm quyền hành đạo hợp pháp nhưng nghiêm cấm lợi dụng tôn giáo để chống phá, vi phạm pháp luật",
          "Chỉ quản lý đối với tôn giáo du nhập",
        ],
        correct: 2,
        fillAnswer:
          "Chính sách hiện hành bảo đảm quyền tự do tín ngưỡng, tôn giáo nhưng nghiêm cấm ______ để hoạt động trái pháp luật.",
        answer: "lợi dụng tôn giáo",
        fullFillAnswer:
          "Tinh thần chung của chính sách là tôn trọng quyền tự do tín ngưỡng, tôn giáo nhưng kiên quyết xử lý mọi hành vi lợi dụng tôn giáo để vi phạm pháp luật.",
      }),
    ],
  },
];
