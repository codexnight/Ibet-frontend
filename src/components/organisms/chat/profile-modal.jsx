import { Modal } from "@/components/atoms/modal";

export function ProfileModal({ isOpen, onClose }) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isLarge>
      <div className="lg:pb-5 pb-10">
        <div className="text-center">
          <img
            src="/avatars/avatar-7.png"
            alt="user avatar"
            className="rounded-full w-20 m-auto"
          />
          <p className="font-bold text-2xl mt-4 mb-2">Mysterio</p>
          <p className="opacity-50 text-xs">Зарегистирован 26.01.2024</p>
        </div>
        <div
          className="grid gap-4 mt-10"
          style={{ gridTemplateColumns: "0.6fr 0.4fr" }}
        >
          <div
            className="flex gap-2.5 items-center py-5 px-6 text-xs font-bold rounded-xl cursor-pointer"
            style={{ border: "1px solid white" }}
          >
            <img src="/icons/send-sms.svg" alt="like" className="w-4" />
            Личное сообщение
          </div>
          <div
            className="flex gap-2.5 items-center py-5 px-8 text-xs font-bold rounded-xl cursor-pointer"
            style={{ border: "1px solid white" }}
          >
            <img src="/icons/like.svg" alt="like" className="w-4" />
            Лайк
          </div>
        </div>
        <div className="grid gap-6 my-10 text-sm">
          <div className="flex gap-3">
            <p className="opacity-50">Ранг:</p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/star-filled.svg" className="w-4" alt="star" />
              Pro
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Выиграл дуэлей:</p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/duel.svg" className="w-5" alt="duel" />4 из 7
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Заработал с дуэлей:</p>
            <p className="font-bold flex gap-1 items-center">
              <img
                src="/icons/money-1.svg"
                style={{ transform: "translateY(-2px)" }}
                alt="duel"
              />
              600 $
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Верно спрогнозировал: </p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/prediction.svg" className="w-6" alt="star" />
              12 из 15
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Подписчиков в приватном чате: </p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/user-yellow.svg" className="w-3.5" alt="star" />
              13
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Лайки: </p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/like.svg" className="w-3.5" alt="star" />
              13
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Пригласил: </p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/rooms.svg" className="w-5" alt="star" />3
            </p>
          </div>
          <div className="flex gap-3">
            <p className="opacity-50">Заработал с приглашений: </p>
            <p className="font-bold flex gap-2 items-center">
              <img src="/icons/money-2.svg" className="w-6" alt="star" />3
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
