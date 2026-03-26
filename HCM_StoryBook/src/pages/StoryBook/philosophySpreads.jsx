/* eslint-disable react-refresh/only-export-components */
import React from "react";
import AutoFitPage from "./AutoFitPage";
import Coverbook from "../../assets/picture/Coverbook.png";

const PageHeader = ({ title }) => (
  <div className="page-header">
    <h2>{title}</h2>
    <div className="chapter-ornament">❦</div>
  </div>
);

const PageNumber = ({ value }) => <div className="page-number">{value}</div>;

const Principle = ({ icon, children }) => (
  <div className="principle">
    <span className="principle-icon">{icon}</span>
    <div>{children}</div>
  </div>
);

const QuoteCard = ({ quote, author }) => (
  <div className="philosophy-quote">
    <div className="quote-symbol">❝</div>
    <p>{quote}</p>
    <div className="quote-author">— {author}</div>
  </div>
);

const WisdomList = ({ title, items }) => (
  <div className="wisdom-section">
    <h4>{title}</h4>
    {items.map((item, index) => (
      <div className="wisdom-item" key={`${title}-${index}`}>
        <span className="wisdom-number">{index + 1}</span>
        <div>{item}</div>
      </div>
    ))}
  </div>
);

export const spreads = [
  {
    left: null,
    right: (
      <AutoFitPage
        className="cover-front"
        style={{
          background: `
            radial-gradient(circle at 18% 20%, rgba(251,191,36,.18) 0%, transparent 36%),
            radial-gradient(circle at 78% 82%, rgba(34,197,94,.14) 0%, transparent 42%),
            url(${Coverbook}) center / cover no-repeat,
            linear-gradient(135deg, #101828 0%, #172033 50%, #0f172a 100%)
          `,
        }}
      >
        <div className="cover-design">
          <div className="cover-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
            <div className="star star-5" />
          </div>

          <div className="cover-ornament top" />

          <div className="cover-title">
            <div className="title-backdrop" />
            <h1 className="main-title">
              <span className="title-line-1">TÔN GIÁO</span>
              <span className="title-line-2">VIỆT NAM</span>
            </h1>
            <div className="subtitle">
              Đặc điểm tôn giáo và chính sách của Đảng, Nhà nước hiện nay
            </div>
          </div>

          <div className="cover-quote">
            <div className="quote-marks">"</div>
            <div className="quote-text">
              Tôn trọng tự do tín ngưỡng, tôn giáo đi đôi với thượng tôn pháp luật
            </div>
            <div className="quote-author">— Tinh thần chính sách hiện hành</div>
            <div className="quote-marks closing">"</div>
          </div>

          <div className="cover-ornament bottom" />
          <div className="cover-glow" />
        </div>
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <PageHeader title="Dẫn nhập" />
        <div className="page-body">
          <h3>Vì sao cần học chủ đề này?</h3>
          <p className="first-letter">
            Tôn giáo ở Việt Nam là một bộ phận của đời sống tinh thần xã hội, gắn
            với lịch sử, văn hóa và khối đại đoàn kết dân tộc. Nắm được đặc điểm
            tôn giáo và chính sách tôn giáo hiện nay giúp chúng ta hiểu đúng quyền
            tự do tín ngưỡng, đồng thời phân biệt rõ giữa sinh hoạt tôn giáo hợp
            pháp với hành vi lợi dụng tôn giáo để vi phạm pháp luật.
          </p>

          <QuoteCard
            quote="Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân."
            author="Quan điểm của Đảng"
          />
        </div>
        <PageNumber value="2" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Mục tiêu học</h4>
          <Principle icon="🎯">
            <strong>Nắm đặc điểm:</strong> hiểu Việt Nam là quốc gia nhiều tôn
            giáo, đa dạng, đan xen và chung sống hòa bình.
          </Principle>
          <Principle icon="🧭">
            <strong>Hiểu chính sách:</strong> tôn trọng tự do tín ngưỡng, bình
            đẳng trước pháp luật, phát huy đại đoàn kết.
          </Principle>
          <Principle icon="🛡️">
            <strong>Biết vận dụng:</strong> phân biệt rõ hành vi tôn giáo hợp pháp
            với mê tín dị đoan, truyền đạo trái phép và lợi dụng tôn giáo.
          </Principle>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Từ khóa</div>
          <p>
            Nhiều tôn giáo • Đan xen hòa bình • Tín đồ yêu nước • Chức sắc • Tự
            do tín ngưỡng • Bình đẳng trước pháp luật • Đại đoàn kết • Vận động
            quần chúng • Truyền đạo hợp pháp
          </p>
        </div>
        <PageNumber value="3" />
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <PageHeader title="Đặc điểm 1" />
        <div className="page-body">
          <h3>Việt Nam là quốc gia có nhiều tôn giáo</h3>
          <p className="first-letter">
            Hiện nay, nước ta có 43 tổ chức thuộc 16 tôn giáo đã được công nhận
            và cấp đăng ký hoạt động với khoảng 57.000 chức sắc, 157.000 chức
            việc và hơn 29.000 cơ sở thờ tự. Đây là minh chứng rõ cho sự phong
            phú của đời sống tôn giáo Việt Nam.
          </p>

          <WisdomList
            title="Những ý chính"
            items={[
              <span>
                Có <strong>tôn giáo du nhập</strong> như Phật giáo, Công giáo,
                Tin Lành, Hồi giáo.
              </span>,
              <span>
                Có <strong>tôn giáo nội sinh</strong> như Cao Đài, Hòa Hảo.
              </span>,
              <span>
                Tổ chức tôn giáo ở nước ta tồn tại dưới nhiều hình thức, phản ánh
                nhu cầu tâm linh đa dạng của nhân dân.
              </span>,
            ]}
          />
        </div>
        <PageNumber value="4" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <PageHeader title="Đặc điểm 2" />
        <div className="page-body">
          <h3>Đa dạng, đan xen và chung sống hòa bình</h3>
          <p className="first-letter">
            Việt Nam là nơi giao lưu của nhiều luồng văn hóa. Các tôn giáo có
            nguồn gốc và truyền thống lịch sử khác nhau nhưng vẫn cùng tồn tại
            trên nhiều địa bàn, tôn trọng niềm tin của nhau và không có xung
            đột, chiến tranh tôn giáo.
          </p>

          <QuoteCard
            quote="Không có một tôn giáo nào du nhập vào Việt Nam mà không mang dấu ấn văn hóa Việt Nam."
            author="Khái quát về đời sống tôn giáo"
          />
        </div>
        <PageNumber value="5" />
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <PageHeader title="Đặc điểm 3" />
        <div className="page-body">
          <h3>Tín đồ và chức sắc trong đời sống xã hội</h3>
          <WisdomList
            title="Điểm cần nhớ"
            items={[
              <span>
                Tín đồ các tôn giáo ở Việt Nam phần lớn là <strong>nhân dân lao
                động</strong>, có lòng yêu nước và tinh thần dân tộc.
              </span>,
              <span>
                Đồng bào có đạo luôn là bộ phận của <strong>khối đại đoàn kết dân
                tộc</strong>, cùng tham gia xây dựng và bảo vệ Tổ quốc.
              </span>,
              <span>
                Đội ngũ <strong>chức sắc</strong> giữ vai trò truyền bá giáo lý,
                thực hành nghi lễ, quản lý tổ chức giáo hội và chăm lo đời sống
                tâm linh cho tín đồ.
              </span>,
            ]}
          />

          <div className="reflection-box">
            <div className="reflection-title">Gợi nhớ</div>
            <p>Khái niệm thường gặp: tín đồ, chức việc, chức sắc, cơ sở thờ tự.</p>
          </div>
        </div>
        <PageNumber value="6" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <PageHeader title="Đặc điểm 4" />
        <div className="page-body">
          <h3>Quan hệ với tổ chức, cá nhân tôn giáo ở nước ngoài</h3>
          <p className="first-letter">
            Các tôn giáo ở Việt Nam đều có những mối liên hệ nhất định với tổ
            chức, cá nhân tôn giáo ở nước ngoài hoặc tổ chức tôn giáo quốc tế.
            Điều đó đặt ra yêu cầu phải mở rộng giao lưu hợp tác, nhưng luôn gắn
            với bảo đảm độc lập, chủ quyền và an ninh quốc gia.
          </p>

          <WisdomList
            title="Yêu cầu khi giải quyết"
            items={[
              <span>Mở rộng giao lưu quốc tế một cách chủ động và đúng pháp luật.</span>,
              <span>Không để các thế lực xấu lợi dụng tự do tôn giáo để chống phá.</span>,
              <span>Kết hợp đối nội với đối ngoại trong công tác tôn giáo.</span>,
            ]}
          />
        </div>
        <PageNumber value="7" />
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <PageHeader title="Chính sách 1" />
        <div className="page-body">
          <h3>Tôn trọng và bảo đảm quyền tự do tín ngưỡng, tôn giáo</h3>
          <p className="first-letter">
            Đảng và Nhà nước xác định tín ngưỡng, tôn giáo là nhu cầu tinh thần
            của một bộ phận nhân dân và sẽ còn tồn tại lâu dài cùng dân tộc
            trong quá trình xây dựng chủ nghĩa xã hội. Vì vậy, chính sách nhất
            quán là tôn trọng và bảo đảm quyền theo hoặc không theo tôn giáo nào.
          </p>

          <QuoteCard
            quote="Các tôn giáo hoạt động trong khuôn khổ pháp luật, bình đẳng trước pháp luật."
            author="Chính sách hiện hành"
          />
        </div>
        <PageNumber value="8" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <PageHeader title="Chính sách 2" />
        <div className="page-body">
          <h3>Đại đoàn kết dân tộc và những điều nghiêm cấm</h3>
          <WisdomList
            title="Nội dung trọng tâm"
            items={[
              <span>
                Đoàn kết đồng bào theo các tôn giáo khác nhau với đồng bào không
                theo tôn giáo.
              </span>,
              <span>
                Mọi công dân, không phân biệt tín ngưỡng, đều có quyền và nghĩa
                vụ xây dựng, bảo vệ Tổ quốc.
              </span>,
              <span>
                Nghiêm cấm chia rẽ, phân biệt đối xử, lợi dụng tôn giáo để mê tín
                dị đoan, kích động và gây rối an ninh quốc gia.
              </span>,
            ]}
          />
        </div>
        <PageNumber value="9" />
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <PageHeader title="Chính sách 3" />
        <div className="page-body">
          <h3>Nội dung cốt lõi của công tác tôn giáo</h3>
          <p className="first-letter">
            Công tác tôn giáo trước hết là công tác vận động quần chúng. Mục tiêu
            là phát huy tinh thần yêu nước, ý thức bảo vệ độc lập và thống nhất
            đất nước, gắn đồng bào có đạo với mục tiêu chung “dân giàu, nước
            mạnh, dân chủ, công bằng, văn minh”.
          </p>

          <WisdomList
            title="Muốn làm tốt cần"
            items={[
              <span>Thực hiện tốt các chính sách kinh tế, xã hội, quốc phòng, an ninh.</span>,
              <span>Nâng cao đời sống vật chất, tinh thần cho đồng bào có đạo.</span>,
              <span>Giúp nhân dân hiểu đúng đường lối, chính sách và pháp luật.</span>,
            ]}
          />
        </div>
        <PageNumber value="10" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <PageHeader title="Chính sách 4" />
        <div className="page-body">
          <h3>Trách nhiệm của cả hệ thống chính trị</h3>
          <WisdomList
            title="Những yêu cầu lớn"
            items={[
              <span>
                Công tác tôn giáo liên quan nhiều lĩnh vực nên là trách nhiệm của
                toàn bộ hệ thống chính trị.
              </span>,
              <span>
                Cần củng cố bộ máy, đội ngũ cán bộ chuyên trách làm công tác tôn
                giáo các cấp.
              </span>,
              <span>
                Tăng cường quản lý nhà nước và đấu tranh với hoạt động lợi dụng
                tôn giáo gây phương hại đến lợi ích Tổ quốc, dân tộc.
              </span>,
            ]}
          />
        </div>
        <PageNumber value="11" />
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <PageHeader title="Theo đạo và truyền đạo" />
        <div className="page-body">
          <h3>Quyền hành đạo hợp pháp và giới hạn pháp lý</h3>
          <WisdomList
            title="Ghi nhớ nhanh"
            items={[
              <span>Mọi tín đồ có quyền tự do hành đạo tại gia đình và cơ sở thờ tự hợp pháp.</span>,
              <span>Các tổ chức tôn giáo được Nhà nước thừa nhận thì được hoạt động theo pháp luật và được pháp luật bảo hộ.</span>,
              <span>Việc theo đạo, truyền đạo phải tuân thủ Hiến pháp và pháp luật.</span>,
              <span>Không được tuyên truyền tà đạo, mê tín dị đoan, ép buộc người khác theo đạo.</span>,
              <span>Nghiêm cấm tổ chức, người và cách thức truyền đạo trái phép.</span>,
            ]}
          />
        </div>
        <PageNumber value="12" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <PageHeader title="Vận dụng" />
        <div className="page-body">
          <h3>Ba câu hỏi để tự kiểm tra</h3>
          <div className="wisdom-section">
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                Vì sao nói chính sách tôn giáo vừa bảo đảm quyền tự do tín
                ngưỡng, vừa yêu cầu hoạt động tôn giáo phải trong khuôn khổ pháp
                luật?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                Tại sao công tác tôn giáo được xem là công tác vận động quần
                chúng chứ không chỉ là quản lý hành chính?
              </div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                Làm thế nào để phân biệt sinh hoạt tôn giáo bình thường với hành
                vi lợi dụng tôn giáo để chống phá, gây rối hoặc mê tín dị đoan?
              </div>
            </div>
          </div>

          <div className="reflection-box">
            <div className="reflection-title">Mẹo nhớ</div>
            <p>
              Tự do tín ngưỡng + bình đẳng pháp luật + đại đoàn kết + ngăn lợi
              dụng tôn giáo = trục chính của chính sách hiện nay.
            </p>
          </div>
        </div>
        <PageNumber value="13" />
      </AutoFitPage>
    ),
  },
  {
    left: (
      <AutoFitPage className="page-left">
        <div className="final-content">
          <div className="conclusion-title">
            <h2>Tổng kết nhanh</h2>
          </div>
          <div className="wisdom-section">
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>Việt Nam là quốc gia có nhiều tôn giáo, đa dạng và đan xen.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>Tín đồ và chức sắc tôn giáo là bộ phận quan trọng của khối đại đoàn kết dân tộc.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>Đảng và Nhà nước nhất quán tôn trọng quyền tự do tín ngưỡng, tôn giáo.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>Công tác tôn giáo là trách nhiệm của cả hệ thống chính trị và phải gắn với phát triển xã hội.</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">5</span>
              <div>Mọi hoạt động theo đạo, truyền đạo phải hợp pháp; nghiêm cấm lợi dụng tôn giáo.</div>
            </div>
          </div>
          <QuoteCard
            quote="Hiểu đúng để tôn trọng khác biệt, củng cố đoàn kết và bảo vệ lợi ích chung của đất nước."
            author="Thông điệp của bài học"
          />
        </div>
        <PageNumber value="14" />
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage
        className="cover-back"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(251,191,36,.14) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(59,130,246,.14) 0%, transparent 40%),
            linear-gradient(135deg, #0f172a 0%, #1e293b 55%, #111827 100%)
          `,
        }}
      >
        <div className="back-cover-design">
          <div className="back-title">
            <div className="back-title-backdrop" />
            <h1>TÔN GIÁO VIỆT NAM</h1>
          </div>
          <div className="cover-quote">
            <div className="quote-marks">"</div>
            <div className="quote-text">
              Tôn trọng niềm tin chính đáng, phát huy đoàn kết, kiên quyết ngăn
              chặn mọi sự lợi dụng tôn giáo trái pháp luật
            </div>
            <div className="quote-author">— Lời nhắc cuối sách</div>
            <div className="quote-marks closing">"</div>
          </div>
        </div>
      </AutoFitPage>
    ),
  },
];

export const spreadsToPages = (bookSpreads, { onTocClick } = {}) => {
  const pages = [];

  pages.push(
    <div className="page" key="cover-front">
      {bookSpreads[0].right}
    </div>
  );

  const OFFSET = 2;
  const idxFor = (spreadIndex, side = "left") => {
    if (spreadIndex <= 0) return 0;
    const base = side === "left" ? 2 * spreadIndex - 1 : 2 * spreadIndex;
    return base + OFFSET;
  };

  const toc = [
    { label: "Dẫn nhập và mục tiêu học tập", s: 1, side: "left" },
    { label: "Đặc điểm tôn giáo ở Việt Nam", s: 2, side: "left" },
    { label: "Tín đồ, chức sắc và quan hệ quốc tế", s: 3, side: "left" },
    { label: "Chính sách của Đảng và Nhà nước", s: 4, side: "left" },
    {
      label: "Công tác tôn giáo và trách nhiệm hệ thống chính trị",
      s: 5,
      side: "left",
    },
    { label: "Theo đạo, truyền đạo và vận dụng", s: 6, side: "left" },
    { label: "Tổng kết nhanh", s: 7, side: "left" },
  ];

  const mid = Math.ceil(toc.length / 2);
  const tocLeft = toc.slice(0, mid);
  const tocRight = toc.slice(mid);

  const renderTocList = (items) => (
    <div className="wisdom-section">
      <h4>MỤC LỤC</h4>
      {items.map((item, index) => {
        const targetIdx = idxFor(item.s, item.side);
        const printedPage = 2 * item.s;
        return (
          <div className="principle" key={`${item.label}-${index}`}>
            <span className="principle-icon">📖</span>
            <a
              href="#"
              className="toc-link"
              data-goto={targetIdx}
              title={`Tới trang ${printedPage}`}
              onClick={onTocClick}
            >
              <strong>{item.label}</strong>
              <span className="toc-page"> — tr. {printedPage}</span>
            </a>
          </div>
        );
      })}
    </div>
  );

  pages.push(
    <div className="page" key="toc-left">
      <AutoFitPage className="page-left">
        <PageHeader title="Mục lục" />
        <div className="page-body">{renderTocList(tocLeft)}</div>
      </AutoFitPage>
    </div>
  );

  pages.push(
    <div className="page" key="toc-right">
      <AutoFitPage className="page-right">
        <PageHeader title="Mục lục (tiếp)" />
        <div className="page-body">{renderTocList(tocRight)}</div>
      </AutoFitPage>
    </div>
  );

  for (let i = 1; i < bookSpreads.length; i += 1) {
    const spread = bookSpreads[i];
    if (spread.left) {
      pages.push(
        <div className="page" key={`page-${i}-left`}>
          {spread.left}
        </div>
      );
    }
    if (spread.right) {
      pages.push(
        <div className="page" key={`page-${i}-right`}>
          {spread.right}
        </div>
      );
    }
  }

  return pages;
};
