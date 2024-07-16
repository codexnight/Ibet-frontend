import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { getBigBanners } from "@/api/user";
import Link from "next/link";

export function TopGames() {
  const { data } = useSWR("/top-games", () => getBigBanners());

  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        className="lg:w-[785px] w-[90vw] mb-8"
        style={{ zIndex: 0 }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {data?.banners?.map((game, index) => (
          <SwiperSlide key={index}>
            <Link href={game.link.split("link:")[1] || ""}>
              <img
                src={`https://banner-storage.xmax.is/${game.image}`}
                class="object-fill rounded-xl w-full"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
