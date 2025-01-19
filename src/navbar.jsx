import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="static inset-x-0 top-0 z-20 bg-background">
        <div className="container">
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="relative z-10 flex max-w-max flex-1 items-center justify-center min-w-full"
          >
            <div className="flex w-full items-center justify-between gap-12 py-4">
              <div>
                <a
                  href="#"
                  className="inline-flex items-center font-semibold gap-2"
                >
                  <svg
                    width="1rem"
                    height="1rem"
                    viewBox="0 0 1024 1024"
                    className="size-8"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M222.102127 765.067103a24.785044 24.785044 0 0 1-22.365552-35.407206l108.723727-228.588921a24.785044 24.785044 0 1 1 44.76651 21.244323l-108.723727 228.600724a24.785044 24.785044 0 0 1-22.400958 14.15108zM638.113191 765.067103A24.785044 24.785044 0 0 1 615.440777 750.384915l-103.542472-231.610336a24.785044 24.785044 0 0 1 45.250409-20.24112l103.577879 231.622139a24.785044 24.785044 0 0 1-22.613402 34.911505z"
                      fill="#203529"
                    />
                    <path
                      d="M669.377754 966.864572H194.460901a25.493188 25.493188 0 0 1-25.493188-25.493188V740.270257a25.493188 25.493188 0 0 1 25.493188-25.493189h168.774348a25.493188 25.493188 0 0 1 0 50.986377h-143.28116V915.866393H643.884566V765.763445h-56.415482a25.493188 25.493188 0 0 1 0-50.986377h81.90867a25.493188 25.493188 0 0 1 25.493188 25.493189v201.101127a25.493188 25.493188 0 0 1-25.493188 25.493188z"
                      fill="#203529"
                    />
                    <path
                      d="M499.954274 348.017427l97.865517-167.971785 373.427998 123.040041-412.635577 118.555127-58.657938-73.623383zM393.048117 576.181462l-87.125332 424.638621 291.897006-264.999332-97.865517-184.152878-106.906157 24.513589zM353.026172 354.508748L43.354749 82.227335l64.32309 365.449574h197.159125l48.189208-93.168161z"
                      fill="#178E3B"
                    />
                    <path
                      d="M310.938806 476.085291h-0.188838L113.956717 474.621793a24.785044 24.785044 0 0 1-24.159517-20.158503L13.954965 55.813559a24.785044 24.785044 0 0 1 41.898527-22.129504L371.131056 349.75238A24.785044 24.785044 0 1 1 336.030713 384.758304L77.723343 125.801803l56.94659 299.403333 176.481316 1.310067a24.785044 24.785044 0 0 1-0.177036 49.570088zM291.039956 1024a24.785044 24.785044 0 0 1-23.923468-31.229156L380.63199 571.236256a24.785044 24.785044 0 1 1 47.85874 12.888222l-92.542634 343.638736 230.807773-199.023904L477.352674 571.236256a24.785044 24.785044 0 0 1 43.114174-24.46638l99.458842 175.21846a24.785044 24.785044 0 0 1-5.370093 31.00491l-307.334547 264.987529a24.785044 24.785044 0 0 1-16.181094 6.019225zM547.553361 447.912957a24.785044 24.785044 0 0 1-6.373297-48.74392l360.173901-96.01254-287.766165-100.320417L517.799506 365.874461a24.785044 24.785044 0 1 1-42.7483-25.103709L581.213811 160.123188a24.785044 24.785044 0 0 1 29.506005-10.846408l383.141376 133.6504a24.785044 24.785044 0 0 1-1.782163 47.351237l-438.128766 116.843779a24.785044 24.785044 0 0 1-6.396902 0.790761zM291.039956 806.517139h-99.399829a11.613564 11.613564 0 1 1 0-23.227127h99.399829a11.613564 11.613564 0 0 1 0 23.227127zM674.66523 882.040709H507.295368a12.392522 12.392522 0 0 1 0-24.785044h167.35806a12.392522 12.392522 0 0 1 0 24.785044zM690.716497 109.5735a12.33351 12.33351 0 0 1-7.293885-2.36048C588.590313 37.921118 472.631713 10.999839 357.062593 31.382587a12.392522 12.392522 0 0 1-4.307877-24.407367A450.934372 450.934372 0 0 1 698.057591 87.172541a12.392522 12.392522 0 0 1-7.317489 22.424564zM292.574269 149.548235a12.392522 12.392522 0 0 1-4.897997-23.78184A361.991471 361.991471 0 0 1 496.944661 102.59828a12.392522 12.392522 0 0 1-4.602936 24.360158 337.194624 337.194624 0 0 0-194.881262 21.586593 12.357115 12.357115 0 0 1-4.886194 1.003204zM208.871634 85.142528a12.392522 12.392522 0 0 1-6.278878-23.085498 450.308845 450.308845 0 0 1 79.15871-36.587447 12.392522 12.392522 0 0 1 8.167262 23.404164 425.429382 425.429382 0 0 0-74.791821 34.569235 12.33351 12.33351 0 0 1-6.255273 1.699546z"
                      fill="#203529"
                    />
                    <path
                      d="M431.913426 598.051313a138.51299 138.51299 0 1 1 138.51299-138.51299A138.666421 138.666421 0 0 1 431.913426 598.051313z m0-227.455891a88.942901 88.942901 0 1 0 88.942902 88.942901A89.049123 89.049123 0 0 0 431.913426 370.595422z"
                      fill="#203529"
                    />
                    <path
                      d="M432.137672 521.04064a61.502317 61.502317 0 1 1 61.502317-61.502317 12.392522 12.392522 0 0 1-24.785044 0 36.717273 36.717273 0 1 0-36.717273 36.717273 12.392522 12.392522 0 0 1 0 24.785044z"
                      fill="#203529"
                    />
                    <path
                      d="M247.347464 364.694221a12.357115 12.357115 0 0 1-8.780987-3.646942l-100.544662-101.063968a12.392522 12.392522 0 1 1 17.573776-17.479358l100.544663 101.063968a12.392522 12.392522 0 0 1-8.79279 21.1263zM590.998003 336.698923A12.392522 12.392522 0 0 1 580.623691 317.484613l45.002559-69.103063A12.392522 12.392522 0 0 1 646.386675 262.013324l-44.990756 69.055854a12.38072 12.38072 0 0 1-10.397916 5.629745zM426.354495 816.726217a12.392522 12.392522 0 0 1-8.120052-21.751827l86.665037-75.157696a12.392522 12.392522 0 0 1 16.240105 18.659597l-86.665037 75.157696a12.345312 12.345312 0 0 1-8.120053 3.09223z"
                      fill="#2FA65B"
                    />
                    <path
                      d="M661.78881 807.284295h-63.426109a12.392522 12.392522 0 0 1 0-24.785044h63.426109a12.392522 12.392522 0 0 1 0 24.785044z"
                      fill="#203529"
                    />
                    <path
                      d="M432.137672 459.538323m-11.377515 0a11.377516 11.377516 0 1 0 22.755031 0 11.377516 11.377516 0 1 0-22.755031 0Z"
                      fill="#203529"
                    />
                  </svg>

                  <span>Crewind Icons</span>
                </a>
              </div>
              <div className="hidden" style={{ position: "relative" }}>
                <ul
                  data-orientation="horizontal"
                  className="group flex-1 list-none items-center justify-center space-x-1 hidden lg:flex"
                  dir="ltr"
                >
                  <li>
                    <button
                      id="radix-:R0:-trigger-radix-:R14b:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:R0:-content-radix-:R14b:"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-[#168e3b] focus:bg-accent focus:text-[#168e3b] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                      data-radix-collection-item=""
                    >
                      How to Use?
                    </button>
                  </li>
                  <li>
                    <button
                      id="radix-:R0:-trigger-radix-:R1kb:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:R0:-content-radix-:R1kb:"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-[#168e3b] focus:bg-accent focus:text-[#168e3b] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                      data-radix-collection-item=""
                    >
                      Customization
                    </button>
                  </li>
                  <li>
                    <button
                      id="radix-:R0:-trigger-radix-:R24b:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:R0:-content-radix-:R24b:"
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-[#168e3b] focus:bg-accent focus:text-[#168e3b] focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 group"
                      data-radix-collection-item=""
                    >
                      Resources
                    </button>
                  </li>
                </ul>
              </div>
              <div className="hidden items-center gap-4 lg:flex">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-input text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-[#168e3b] h-8 px-4 py-2">
                  {import.meta.env.VITE_VERSION}
                </button>
                <a
                  href="http://github.com/jameeronline"
                  className="inline-flex items-center size-6 justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.24902C6.51613 2.24902 2 6.70064 2 12.249C2 16.6361 4.87097 20.3781 8.87097 21.7329C9.3871 21.8297 9.54839 21.5071 9.54839 21.2813C9.54839 21.0555 9.54839 20.4103 9.51613 19.5393C6.74194 20.1845 6.16129 18.1845 6.16129 18.1845C5.70968 17.0555 5.03226 16.7329 5.03226 16.7329C4.12903 16.0877 5.06452 16.0877 5.06452 16.0877C6.06452 16.12 6.6129 17.12 6.6129 17.12C7.48387 18.6684 8.96774 18.2168 9.51613 17.9264C9.6129 17.2813 9.87097 16.8297 10.1613 16.5716C7.96774 16.3458 5.6129 15.4748 5.6129 11.6684C5.6129 10.5716 6.03226 9.70064 6.64516 9.02322C6.54839 8.79741 6.19355 7.76515 6.74194 6.37806C6.74194 6.37806 7.6129 6.11999 9.51613 7.41031C10.3226 7.18451 11.1613 7.05548 12.0323 7.05548C12.9032 7.05548 13.7742 7.15225 14.5484 7.41031C16.4516 6.15225 17.2903 6.37806 17.2903 6.37806C17.8387 7.73289 17.5161 8.79741 17.3871 9.02322C18.0323 9.70064 18.4194 10.6039 18.4194 11.6684C18.4194 15.4748 16.0645 16.3458 13.871 16.5716C14.2258 16.8942 14.5484 17.5393 14.5484 18.4426C14.5484 19.7974 14.5161 20.8619 14.5161 21.1845C14.5161 21.4426 14.7097 21.7329 15.1935 21.6361C19.129 20.3135 22 16.6039 22 12.1845C21.9677 6.70064 17.4839 2.24902 12 2.24902Z"
                      fill="#323544"
                    />
                  </svg>
                </a>
                <a
                  href="http://x.com/jameeronline"
                  className="inline-flex items-center size-6 justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.7512 2.96094H20.818L14.1179 10.6187L22 21.0391H15.8284L10.9946 14.7191L5.4636 21.0391H2.39492L9.56132 12.8483L2 2.96094H8.32824L12.6976 8.73762L17.7512 2.96094ZM16.6748 19.2035H18.3742L7.40492 4.70014H5.58132L16.6748 19.2035Z"
                      fill="#323544"
                    />
                  </svg>
                </a>
              </div>
              <div className="flex items-center gap-4 lg:hidden">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-[#168e3b] h-10 w-10"
                  aria-label="Main Menu"
                >
                  Menu
                </button>
              </div>
            </div>
            <div className="absolute left-0 top-full flex justify-center"></div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
