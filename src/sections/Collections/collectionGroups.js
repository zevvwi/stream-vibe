import categoryItems from "@/sections/Categories/categoryItems"

const collectionGroups = [
  {
    isActive: true,
    title: 'Movies',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
              spaceBetween: 30
            },
          }
        },
      },
      {
        title: "Trending Now",
        movieItems: [
          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Bhai Jaan",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mengal bhari",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-man",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Bhai Jaan",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mengal bhari",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-man",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Bhai Jaan",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mengal bhari",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-man",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },

          {
            title: "Morbius",
            imgSrc: "/src/assets/images/movies/1.jpg",
            duration: "1h 30min",
            views: "2K",
          },
          {
            title: "Bhai Jaan",
            imgSrc: "/src/assets/images/movies/2.jpg",
            duration: "1h 57min",
            views: "1.5K",
          },
          {
            title: "Suraj pe mengal bhari",
            imgSrc: "/src/assets/images/movies/3.jpg",
            duration: "2h 10min",
            views: "1.8K",
          },
          {
            title: "Pathan",
            imgSrc: "/src/assets/images/movies/4.jpg",
            duration: "2h 20min",
            views: "3K",
          },
          {
            title: "Ant-man",
            imgSrc: "/src/assets/images/movies/5.jpg",
            duration: "1h 42min",
            views: "5K",
          },
        ],
      },
      {
        title: "New Releases",
        movieItems: [
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/6.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            }
          },
          {
            title: "Action Film",
            imgSrc: "/src/assets/images/movies/7.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            }
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/movies/8.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            }
          },
          {
            title: "The tomorrow war",
            imgSrc: "/src/assets/images/movies/9.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            }
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/movies/10.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            }
          },

          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/6.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            }
          },
          {
            title: "Action Film",
            imgSrc: "/src/assets/images/movies/7.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            }
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/movies/8.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            }
          },
          {
            title: "The tomorrow war",
            imgSrc: "/src/assets/images/movies/9.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            }
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/movies/10.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            }
          },

          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/6.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            }
          },
          {
            title: "Action Film",
            imgSrc: "/src/assets/images/movies/7.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            }
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/movies/8.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            }
          },
          {
            title: "The tomorrow war",
            imgSrc: "/src/assets/images/movies/9.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            }
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/movies/10.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            }
          },

          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/6.jpg",
            released: {
              label: "14 April 2023",
              dateTime: "2023-04-14",
            }
          },
          {
            title: "Action Film",
            imgSrc: "/src/assets/images/movies/7.jpg",
            released: {
              label: "22 April 2023",
              dateTime: "2023-04-22",
            }
          },
          {
            title: "Sin City",
            imgSrc: "/src/assets/images/movies/8.jpg",
            released: {
              label: "13 April 2023",
              dateTime: "2023-04-13",
            }
          },
          {
            title: "The tomorrow war",
            imgSrc: "/src/assets/images/movies/9.jpg",
            released: {
              label: "19 April 2023",
              dateTime: "2023-04-19",
            }
          },
          {
            title: "Misfire",
            imgSrc: "/src/assets/images/movies/10.jpg",
            released: {
              label: "11 April 2023",
              dateTime: "2023-04-11",
            }
          },
        ],
      },
      {
        title: "Must - Watch Movies",
        movieItems: [
          {
            title: "Kantara",
            imgSrc: "/src/assets/images/movies/11.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Pushpa 2",
            imgSrc: "/src/assets/images/movies/12.jpg",
            duration: "1h 13min",
            rating: {
              value: 4,
              label: "20K",
            }
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/movies/13.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/14.jpg",
            duration: "2h 10min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },

          {
            title: "Kantara",
            imgSrc: "/src/assets/images/movies/11.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Pushpa 2",
            imgSrc: "/src/assets/images/movies/12.jpg",
            duration: "1h 13min",
            rating: {
              value: 4,
              label: "20K",
            }
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/movies/13.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/14.jpg",
            duration: "2h 10min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },

          {
            title: "Kantara",
            imgSrc: "/src/assets/images/movies/11.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Pushpa 2",
            imgSrc: "/src/assets/images/movies/12.jpg",
            duration: "1h 13min",
            rating: {
              value: 4,
              label: "20K",
            }
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/movies/13.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/14.jpg",
            duration: "2h 10min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },

          {
            title: "Kantara",
            imgSrc: "/src/assets/images/movies/11.jpg",
            duration: "1h 57min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Pushpa 2",
            imgSrc: "/src/assets/images/movies/12.jpg",
            duration: "1h 13min",
            rating: {
              value: 4,
              label: "20K",
            }
          },
          {
            title: "Blade Runner 2049",
            imgSrc: "/src/assets/images/movies/13.jpg",
            duration: "1h 42min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
          {
            title: "Adipurush",
            imgSrc: "/src/assets/images/movies/14.jpg",
            duration: "2h 10min",
            rating: {
              value: 4.5,
              label: "20K",
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
              spaceBetween: 30
            },
          }
        },
      },
    ]
  },
  {
    title: 'Shows',
    items: [
      {
        title: 'Our Genres',
        categoryItems,
      },
      {
        title: 'Popular Top 10 In Genres',
        categoryItems: [
          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },

          {
            title: 'Action',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/action/1.jpg',
              '/src/assets/images/categories/action/2.jpg',
              '/src/assets/images/categories/action/3.jpg',
              '/src/assets/images/categories/action/4.jpg',
            ]
          },
          {
            title: 'Adventure',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/adventure/1.jpg',
              '/src/assets/images/categories/adventure/2.jpg',
              '/src/assets/images/categories/adventure/3.jpg',
              '/src/assets/images/categories/adventure/4.jpg',
            ]
          },
          {
            title: 'Comedy',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/comedy/1.jpg',
              '/src/assets/images/categories/comedy/2.jpg',
              '/src/assets/images/categories/comedy/3.jpg',
              '/src/assets/images/categories/comedy/4.jpg',
            ]
          },
          {
            title: 'Drama',
            badge: 'Top 10 in',
            images: [
              '/src/assets/images/categories/drama/1.jpg',
              '/src/assets/images/categories/drama/2.jpg',
              '/src/assets/images/categories/drama/3.jpg',
              '/src/assets/images/categories/drama/4.jpg',
            ]
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
              spaceBetween: 30
            },
          }
        },
      },
      {
        title: "Trending Shows Now",
        movieItems: [
          {
            title: "Stranger Things 7",
            imgSrc: "/src/assets/images/shows/1.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/2.jpg",
            duration: "2h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3.jpg",
            duration: "14h 30min",
            seasons: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },

          {
            title: "Stranger Things 7",
            imgSrc: "/src/assets/images/shows/1.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/2.jpg",
            duration: "2h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3.jpg",
            duration: "14h 30min",
            seasons: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },

          {
            title: "Stranger Things 7",
            imgSrc: "/src/assets/images/shows/1.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/2.jpg",
            duration: "2h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3.jpg",
            duration: "14h 30min",
            seasons: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },

          {
            title: "Stranger Things 7",
            imgSrc: "/src/assets/images/shows/1.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/2.jpg",
            duration: "2h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Lucifer",
            imgSrc: "/src/assets/images/shows/3.jpg",
            duration: "14h 30min",
            seasons: "3 Season",
            href: "/show",
          },
          {
            title: "The Gray Man",
            imgSrc: "/src/assets/images/shows/4.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
              spaceBetween: 30
            },
          }
        },
      },
      {
        title: "New Released Shows",
        movieItems: [
          {
            title: "High Towm",
            imgSrc: "/src/assets/images/shows/5.jpg",
            duration: "12h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapur",
            imgSrc: "/src/assets/images/shows/6.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: into the shadows",
            imgSrc: "/src/assets/images/shows/7.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8.jpg",
            duration: "10h 30min",
            seasons: "3 Season",
            href: "/show",
          },

          {
            title: "High Towm",
            imgSrc: "/src/assets/images/shows/5.jpg",
            duration: "12h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapur",
            imgSrc: "/src/assets/images/shows/6.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: into the shadows",
            imgSrc: "/src/assets/images/shows/7.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8.jpg",
            duration: "10h 30min",
            seasons: "3 Season",
            href: "/show",
          },

          {
            title: "High Towm",
            imgSrc: "/src/assets/images/shows/5.jpg",
            duration: "12h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapur",
            imgSrc: "/src/assets/images/shows/6.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: into the shadows",
            imgSrc: "/src/assets/images/shows/7.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8.jpg",
            duration: "10h 30min",
            seasons: "3 Season",
            href: "/show",
          },

          {
            title: "High Towm",
            imgSrc: "/src/assets/images/shows/5.jpg",
            duration: "12h 23min",
            seasons: "5 Season",
            href: "/show",
          },
          {
            title: "Mirzapur",
            imgSrc: "/src/assets/images/shows/6.jpg",
            duration: "7h 40min",
            seasons: "2 Season",
            href: "/show",
          },
          {
            title: "Breathe: into the shadows",
            imgSrc: "/src/assets/images/shows/7.jpg",
            duration: "8h 20min",
            seasons: "4 Season",
            href: "/show",
          },
          {
            title: "Peaky Blinders",
            imgSrc: "/src/assets/images/shows/8.jpg",
            duration: "10h 30min",
            seasons: "3 Season",
            href: "/show",
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
              spaceBetween: 30
            },
          }
        },
      },
      {
        title: "Must - Watch Shows",
        movieItems: [
          {
            title: "Duranga",
            imgSrc: "/src/assets/images/shows/9.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            }
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/10.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            }
          },
          {
            title: "Mai",
            imgSrc: "/src/assets/images/shows/11.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            }
          },
          {
            title: "Stranger Things",
            imgSrc: "/src/assets/images/shows/12.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            }
          },

          {
            title: "Duranga",
            imgSrc: "/src/assets/images/shows/9.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            }
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/10.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            }
          },
          {
            title: "Mai",
            imgSrc: "/src/assets/images/shows/11.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            }
          },
          {
            title: "Stranger Things",
            imgSrc: "/src/assets/images/shows/12.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            }
          },

          {
            title: "Duranga",
            imgSrc: "/src/assets/images/shows/9.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            }
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/10.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            }
          },
          {
            title: "Mai",
            imgSrc: "/src/assets/images/shows/11.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            }
          },
          {
            title: "Stranger Things",
            imgSrc: "/src/assets/images/shows/12.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            }
          },

          {
            title: "Duranga",
            imgSrc: "/src/assets/images/shows/9.jpg",
            duration: "7h 40min",
            rating: {
              value: 4.5,
              label: "12K",
            }
          },
          {
            title: "Money Heist",
            imgSrc: "/src/assets/images/shows/10.jpg",
            duration: "12h 23min",
            rating: {
              value: 5,
              label: "28K",
            }
          },
          {
            title: "Mai",
            imgSrc: "/src/assets/images/shows/11.jpg",
            duration: "10h 30min",
            rating: {
              value: 4,
              label: "2K",
            }
          },
          {
            title: "Stranger Things",
            imgSrc: "/src/assets/images/shows/12.jpg",
            duration: "8h 20min",
            rating: {
              value: 4.5,
              label: "32K",
            }
          },
        ],
        sliderParams: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 30,
          breakpoints: {
            0: {
              slidesPerView: 1.58,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            481: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 20,
              allowTouchMove: false,
            },
            1441: {
              allowTouchMove: false,
              spaceBetween: 30
            },
          }
        },
      },
    ]
  },
]

export default collectionGroups