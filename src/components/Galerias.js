const Galerias = () => (
    <div className="rounded-3xs md:p-10 gap-[10px] md:bg-gray flex flex-col md:flex-row justify-center items-center">
      <div className="hidden md:hidden lg:block w-[50%] p-4 md:p-0">
        <img
          className="rounded-3xs w-full h-full object-cover"
          alt=""
          src="/container.png"
        />
        <div className="rounded-3xs bg-white w-full mt-5 flex flex-col p-6 box-border items-start justify-start gap-[18px] text-[14px] text-darkslategray-200">
          <div className="flex flex-row items-center justify-start gap-[13px]">
            <img
              className="relative rounded-[100px] w-12 h-12 object-cover"
              alt=""
              src="/ken.png"
            />
            <div className="relative w-44 h-[35.3px]">
              <img
                className="top-[0px] left-[0px] w-[78.11px] h-[11.95px]"
                alt=""
                src="/stars1.svg"
              />
              <div className="top-[19.3px] left-[0px] flex flex-row items-center justify-start gap-[10px]">
                <b className="relative leading-[100%]">Ken T.</b>
                <div className="relative w-[126px] h-4 text-xs text-mediumaquamarine">
                  <div className="top-[1px] left-[26px] leading-[120%]">
                    Verified Customer
                  </div>
                  <img
                    className="top-[0px] left-[0px] w-4 h-4"
                    alt=""
                    src="/verify-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative text-base leading-[150%] text-dimgray">
            “As soon as the Clarifions arrived I put one in my bedroom. This
            was late in the afternoon. When I went to the bedroom in the
            evening it smelled clean. When I went to bed I felt I could
            breathe better. Wonderful.”
          </div>
        </div>
      </div>
      <div className="w-full md:w-[75%] lg:w-[50%]  md:pl-6 flex justify-start">
        <div className="flex flex-col gap-[18px] w-full">
          <div className="w-[95%] md:w-full text-center md:text-start relative text-[20px] md:text-[24px] lg:text-[30px] leading-[140%] capitalize text-royalblue">
            <span>ONE TIME ONLY</span>
            <span className="text-black"> special price for 6 extra Clarifion for only </span>
            <span>$14 each</span>
            <span className="text-black"> ($84.00 total!)</span>
          </div>
          <div className="self-stretch w-full flex flex-row items-center justify-start gap-[24px] text-[14px]">
            <div className="relative w-[134px] h-[134px] md:w-[200px] md:w-[200px]">
              <img
                className="bg-royalblue rounded-3xs w-[134px] h-[134px]"
                alt=""
                src="/clarifionbox.png"
              />
            </div>
            <div className="w-full text-sm flex flex-col items-start justify-start gap-[10px]">
              <div className="self-stretch flex flex-row items-center justify-between w-[100%]">
                <div className="relative md:text-[24px] text-[11px] leading-[100%] capitalize">
                  Clarifion Air Ionizer
                </div>
                <div className="flex flex-row items-center justify-center gap-[10px] text-darkgray">
                  <div className="relative [text-decoration:line-through] capitalize md:text-[22px] text-[12px] font-semibold">
                    $180
                  </div>
                  <div className="relative md:text-[22px] text-[12px] leading-[140%] capitalize font-semibold text-royalblue">
                    $84
                  </div>
                </div>
              </div>
              <img
                className="relative w-[98px] h-[18px]"
                alt=""
                src="/stars.svg"
              />
              <div className="flex flex-row items-center justify-start gap-[16px] text-darkslategray-100">
                <img
                  className="relative w-4 h-4"
                  alt=""
                  src="/pointblue.svg"
                />
                <div className="relative font-light text-xs md:text-lg">
                  12 left in Stock
                </div>
              </div>
              <div className="relative leading-[140%] text-[11px] md:text-[14px] text-dimgray inline-block w-[95%] md:w-[100%]">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </div>
            </div>
          </div>
          <div className="self-stretch w-full flex flex-col items-start justify-start gap-[7px] text-dimgray">
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="relative w-[22.5px] h-[22px]"
                alt=""
                src="/tick.svg"
              />
              <div className="relative leading-[160%] text-xs md:text-[15px] inline-block w-[95%] shrink-0">
                <span>Negative Ion Technology may</span>
                <b> help with allergens</b>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="relative w-[22.5px] h-[22px]"
                alt=""
                src="/tick.svg"
              />
              <div className="relative leading-[160%] text-xs md:text-[15px]">
                <span>Designed for</span>
                <b> air rejuvenation</b>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-[12px]">
              <img
                className="relative w-[22.5px] h-[22px]"
                alt=""
                src="/tick.svg"
              />
              <div className="relative leading-[160%] text-xs md:text-[15px]">
                <b>Perfect for every room</b>
                <span> in all types of places.</span>
              </div>
            </div>
          </div>
          <div className="rounded-3xs bg-aliceblue w-[95%] md:w-full flex flex-col py-3 px-4 box-border items-start justify-start">
            <div className="flex flex-row items-center justify-start gap-[16px]">
              <img
                className="relative w-8 h-8"
                alt=""
                src="/porcen.svg"
              />
              <div className="relative leading-[140%] text-xs md:text-lg">
                <span>Save </span>
                <span className="text-royalblue">53%</span>
                <span> and get </span>
                <span className="text-royalblue">6 extra Clarifision</span>
                <span> for only </span>
                <span className="text-royalblue">$14 Each</span>
                <span>.</span>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-start gap-[20px] text-lg md:text-xl text-white">
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="lg:w-[85%] md:[70%] text-md md:text-xl rounded-[50px] bg-forestgreen flex flex-col py-4 px-16 items-center justify-center">
                <div className="flex flex-row items-center justify-start gap-[12px] md:gap-[19.76px]">
                  <b className="relative uppercase text-[12px] md:text-[16px] lg:text-[20px]">
                    Yes - Claim my discount
                  </b>
                  <img
                    className="relative w-[16.99px] h-[14.55px]"
                    alt=""
                    src="/arrow.svg"
                  />
                </div>
              </div>
              <div className="w-full rounded flex flex-col md:flex-row p-2 md:py-2 md:px-4 items-center justify-center gap-[16px] text-xs text-dimgray border-[1px] border-solid border-lightgray">
                <div className="flex">
                  <div className="relative leading-[140%] capitalize">
                    Free shipping
                  </div>
                  <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-lightgray" />
                  <div className="flex flex-row items-center justify-start gap-[10px] text-center">
                    <img
                      className="relative w-3 h-3 shrink-0"
                      alt=""
                      src="/cand.svg"
                    />
                    <div className="relative leading-[150%] capitalize">
                      Secure 256-bit SSL encryption.
                    </div>
                  </div>
                  <div className="relative box-border w-px h-[17px] border-r-[1px] border-solid border-lightgray" />
                </div>
                <div>
                  <div className="flex flex-row items-center justify-center gap-[2px]">
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/visa.svg"
                    />
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/shop.svg"
                    />
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/payp.svg"
                    />
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/mastercard.svg"
                    />
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/google.svg"
                    />
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/apple.svg"
                    />
                    <img
                      className="relative w-6 h-3.5 shrink-0"
                      alt=""
                      src="/americane.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative text-[18px] [text-decoration:underline] uppercase font-medium text-red">
              No thanks, I don’t want this.
            </div>
          </div>
          <div className="flex flex-row w-[70%] items-center justify-start gap-[16px] text-dimgray">
            <img
              className="relative w-[88px] h-[88px] object-cover"
              alt=""
              src="/satifg.png"
            />
            <div className="relative text-[12px] md:text-lg leading-[140%] inline-block w-full shrink-0">
              <span>If you are not completely thrilled with your Clarifion - We have a </span>
              <b>30 day satisfaction guarantee</b>
              <span>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
  export default Galerias;