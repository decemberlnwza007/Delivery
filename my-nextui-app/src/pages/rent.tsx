import { useState, useEffect } from "react";
import { title } from "@/components/primitives";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";

interface Car {
  name: string;
  image: string;
  price: number;
}

const superCars: Car[] = [
  { name: "Ferrari 488", image: "https://www.hagginoaks.com/wp-content/uploads/2019/05/PNGPIX-COM-Red-Ferrari-488-GTB-Car-PNG-Image-min.png", price: 35000 },
  { name: "Porsche 911 GT3 RS", image: "https://files.porsche.com/filestore/image/multimedia/none/992-gt3-rs-modelexplorer/normal/c310eed8-1a15-11ed-80f5-005056bbdc38;sS;twebp/porsche-normal.webp", price: 25000 },
  { name: "Lamborghini Huracan", image: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/2023/model_chooser/huracan_evo_spyder_m.jpg", price: 30000 },
  { name: "Koenigsegg Jesko", image: "https://www.pngplay.com/wp-content/uploads/13/Koenigsegg-Jesko-PNG-Clipart-Background.png", price: 40000 },
  { name: "McLaren 570s", image: "https://pngimg.com/d/Mclaren_PNG76.png", price: 30000 },
  { name: "Bugatti Chiron", image: "https://pngimg.com/d/bugatti_PNG99581.png", price: 35000 },
];

const electricCars: Car[] = [
  { name: "Tesla Model 3", image: "https://www.tesla.com/ownersmanual/images/GUID-B5641257-9E85-404B-9667-4DA5FDF6D2E7-online-en-US.png", price: 10000 },
  { name: "Tesla Model Y", image: "https://www.tesla.com/ownersmanual/images/GUID-1F2D8746-336F-4CF9-9A04-F35E960F31FE-online-en-US.png", price: 12000 },
  { name: "BMW i7", image: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYfvhsd10tLhu1XzWVo7puMLWFmdkAj5DOPitIqZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snpq6v6ODubLz2aKqfkSPjmB2fJj5DOP5Eagd%25kcWExHWpbl8FO2k3Hy2o24tXATQBrXpFhtAlZ24riIqfJscpF4HvVUo0KiIFJGzYfABHvIT9aqeO2JGvloRyhgpT9GsLx6NUilo90yG1obHsLoAC9BYhJ0yLOEVt7qTACygNS3WmlOECUka5t7sgNEbn%25VP10UkNh5FJhVAbnkq8hGDzOh5nmPmD0agd56reMnTNIu8dtE6Cgk1F7GquAw", price: 20000 },
  { name: "BMW IX", image: "https://www.imc.co.th/img/model/640_2023042016174044.png", price: 19000 },
  { name: "BMW ix3", image: "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331cqgv2Z7d%25i02uCaY3MuO2kOHUtWPfbYf6JZg10tLhu1XzWVo7puMLWFmdkAj5DOPMIExZ8XgY1nTNIowJ4HO3zkyXq%25sGM8snGhMQSk%2508Xc9Vo74giZ5NF1VgxNJ0%25lI2oub5imC2yRCzXeTt%25ViPRKVZVYV94Wh1DMztia0eqVYDaf4oTjmztYRSFxy67aftxdIbWw1RSfWQvxY%25VxdSeZGheuzWQdjcyFk3aeZQ6KCZfXRjcZwBEcHrx6Kc%252Nqe4WwBKupkQTFe%252B3in0VIjup2XH5Axv63iprJ8ChGwXHi4TPO89%25rJHFlMhJou4TJIsD8XL3FlTv0YPmyXIslGATs%25Crv0s9OlgNE4GA0ogsPoNF9OALU0M9kIogOybADgnvLUgChOYZ5GybUEqg4I89ChbNmUFYPoEqhk7figMLNmqn1S4YDyk7m5VdQ5YCn178zQZPtE5V1PaZcTfN8zVMRcXySkPazDxKiodnMRaYWDA1Q5DxRteYOZZ8YWxfjtzzcPteWS6fgKKMfjedwSkYBDS61Qi5JxyK6dnua2lKWzL1AHRu672mnVt0YgMIvyz", price: 15000 },
];

export default function RentPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [showElectricCars, setShowElectricCars] = useState<boolean>(false);
  const [showPersonalInfoModal, setShowPersonalInfoModal] = useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [rentalDays, setRentalDays] = useState<number>(1); // เพิ่ม state สำหรับจำนวนวันที่เช่า

  useEffect(() => {
    const storedSearchTerm = localStorage.getItem("searchTerm");
    const storedSortOrder = localStorage.getItem("sortOrder");
    const storedShowElectricCars = localStorage.getItem("showElectricCars");

    if (storedSearchTerm) {
      setSearchTerm(storedSearchTerm);
    }
    if (storedSortOrder) {
      setSortOrder(storedSortOrder as "asc" | "desc");
    }
    if (storedShowElectricCars) {
      setShowElectricCars(storedShowElectricCars === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("searchTerm", searchTerm);
    localStorage.setItem("sortOrder", sortOrder);
    localStorage.setItem("showElectricCars", String(showElectricCars));
  }, [searchTerm, sortOrder, showElectricCars]);

  const filteredCars = (showElectric: boolean) => {
    const carsToFilter = showElectric ? electricCars : superCars;
    return carsToFilter
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .sort((a, b) => (sortOrder === "asc" ? a.price - b.price : b.price - a.price));
  };

  const openModal = (car: Car) => {
    setSelectedCar(car);
  };

  const closeModal = () => {
    setSelectedCar(null);
    setShowPaymentModal(false);
  };

  const confirmRental = () => {
    setShowPersonalInfoModal(true);
    closeModal();
  };

  const confirmPayment = () => {
    setShowPaymentModal(false);
    setShowPersonalInfoModal(false);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
       <br />
      <br />
      <br />
      <motion.div
        className="flex flex-col items-start justify-center gap-4 py-8 md:py-10 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-block max-w-lg text-left">
          <h1 className={title()}>เช่ารถ</h1>
          <div className="flex flex-col md:flex-row gap-2 mt-4">
            <input
              type="text"
              placeholder="ค้นหารถ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="p-2 border rounded w-full max-w-md"
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
              className="p-2 border rounded"
            >
              <option value="asc">เรียงลำดับตามราคา: ต่ำ - สูง</option>
              <option value="desc">เรียงลำดับตามราคา: สูง - ต่ำ</option>
            </select>
          </div>
          <div className="mt-4">
            <button onClick={() => setShowElectricCars(false)} className="mr-2 p-2 border rounded">Super Cars</button>
            <button onClick={() => setShowElectricCars(true)} className="p-2 border rounded">Electric Cars</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {filteredCars(showElectricCars).map((car, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md p-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-lg font-semibold mt-2">{car.name}</h2>
              <p className="text-gray-600">฿{car.price}/วัน</p>
              <Button
                className="w-full mt-2"
                style={{ backgroundColor: '#000000', color: 'white' }}
                onClick={() => openModal(car)}
              >
                เช่าตอนนี้
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {selectedCar && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-2">{selectedCar.name}</h2>
            <img src={selectedCar.image} alt={selectedCar.name} className="w-full h-48 object-cover mb-4 rounded" />
            <p className="text-gray-600">฿{selectedCar.price}/วัน</p>
            <p className="mt-4">จำนวนวันที่เช่า:
              <input
                type="number"
                min="1"
                value={rentalDays}
                onChange={(e) => setRentalDays(Number(e.target.value))}
                className="border p-1 rounded w-16 ml-2"
              />
            </p>
            <p className="mt-2">ยอดรวม: ฿{selectedCar?.price ? selectedCar.price * rentalDays : 0}</p>
            <p className="mt-4">คุณต้องการดำเนินการเช่าหรือไม่?</p>
            <div className="flex justify-end mt-4">
              <button className="mr-2 bg-gray-300 text-black py-2 px-4 rounded" onClick={closeModal}>
                ยกเลิก
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={confirmRental}>
                ยืนยันการเช่า
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showPersonalInfoModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-2">ข้อมูลส่วนตัว</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="ชื่อ"
                className="border p-2 rounded w-6/12 mb-2"
                required
              />
              &nbsp;
              <input
                type="text"
                placeholder="นามสกุล"
                className="border p-2 rounded w-6/12 mb-2"
                required
              />
            </div>
            <input
              type="text"
              placeholder="อีเมล"
              className="border p-2 rounded w-full mb-2"
              required
            />
            <input
              type="text"
              placeholder="หมายเลขโทรศัพท์"
              className="border p-2 rounded w-full mb-2"
              required
            />
            <div className="flex justify-end mt-4">
              <button className="mr-2 bg-gray-300 text-black py-2 px-4 rounded" onClick={() => setShowPersonalInfoModal(false)}>
                ยกเลิก
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => setShowPaymentModal(true)}>
                ชำระเงิน
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {showPaymentModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-8 max-w-sm w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-lg font-semibold mb-2">วิธีการชำระเงิน</h2>
            <div className="flex justify-between mb-4">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={confirmPayment}>
                ชำระด้วยบัตรเครดิต
              </button>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={confirmPayment}>
                💵 ชำระเงินสด
              </button>
            </div>
            <div className="flex justify-end mt-4">
              <button className="bg-gray-300 text-black py-2 px-4 rounded" onClick={() => setShowPaymentModal(false)}>
                ยกเลิก
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
