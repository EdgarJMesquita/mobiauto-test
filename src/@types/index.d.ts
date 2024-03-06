type VehicleInfo = {
  TipoVeiculo: number;
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
};

type VehicleType = "CAR" | "MOTOCYCLE" | "TRUCK";

type PageProps = {
  pageProps: {
    vehicleType: string;
    makeNameSlug: string;
    modelNameSlug: string;
    year: string;
    trim: {
      id: number;
      vehicleType: string;
      name: string;
      fullName: string;
      engine: string;
      makeId: number;
      makeName: string;
      modelId: number;
      modelName: string;
      imageId: number;
      images: Array<{
        imageId: number;
        position: number;
      }>;
      fuel: string;
      tank: number;
      torque: string;
      seats: number;
      fuelId: number;
      fuelName: string;
      bodystyleId: number;
      initialYear: number;
      finalYear: number;
      fipeId: string;
      molicarId: number;
      power: number;
      maxVelocity: number;
      time0to100: number;
      cityConsumption: number;
      roadConsumption: number;
      height: number;
      width: number;
      length: number;
      imported: boolean;
      engineSize: number;
      price0km: number;
      alimentation: string;
      traction: string;
      rearSuspension: string;
      frontSuspension: string;
      rearBrake: string;
      frontBrake: string;
      factoryDescription: string;
      wheelbases: number;
      currency: string;
      inProduction: boolean;
      weight: number;
      notLauching: boolean;
      premium: boolean;
      power2: number;
      trunk: number;
      torque2: number;
      maxVelocity2: number;
      doors: number;
      fuel2Id: number;
      fuel2Name: string;
      features: Array<{
        id: number;
        name: string;
        type: string;
      }>;
      lifestyles: Array<any>;
    };
    trimNameSlug: string;
    fipeInfo: {
      fipeId: string;
      date: {
        month: number;
        year: number;
        epoch: number;
        label: string;
      };
      price: number;
    };
    fipeHistory: Array<{
      fipeId: string;
      date: {
        month: number;
        year: number;
        epoch: number;
        label: string;
      };
      price: number;
    }>;
    features: {
      CAR_SOUND: Array<{
        id: number;
        name: string;
        featureType: string;
      }>;
      CAR_WINDOW: Array<{
        id: number;
        name: string;
        featureType: string;
      }>;
      CAR_COMFORT: Array<{
        id: number;
        name: string;
        featureType: string;
      }>;
      CAR_SECURITY: Array<{
        id: number;
        name: string;
        featureType: string;
      }>;
      CAR_SEAT: Array<{
        id: number;
        name: string;
        featureType: string;
      }>;
      CAR_OTHER: Array<{
        id: number;
        name: string;
        featureType: string;
      }>;
    };
    priceInfo: any;
    retailMobiPrice: {
      params: {
        modelyear: number;
        trim_name: any;
        trim_id: number;
        condition: number;
        deal_status: number;
        color_id: number;
        region: string;
        longitude: any;
        latitude: any;
        source: string;
        km: any;
      };
      deals_metrics: {
        overview: {
          price_min: number;
          price_mean: number;
          price_max: number;
          price_median: number;
          qtd_deal: number;
          km_mean: number;
        };
        level: {
          region: string;
          color_id: number;
          condition: number;
          deal_status: number;
        };
        price_percentiles: {
          "5": number;
          "10": number;
          "15": number;
          "20": number;
          "25": number;
          "30": number;
          "35": number;
          "40": number;
          "45": number;
          "55": number;
          "60": number;
          "65": number;
          "70": number;
          "75": number;
          "80": number;
          "85": number;
          "90": number;
          "95": number;
        };
        sufficient_amount: boolean;
        offer_type: {
          price: {
            great: {
              sup: number;
            };
            good: {
              inf: number;
              sup: number;
            };
            fair: {
              inf: number;
            };
          };
          proposal_percentage: {
            great: number;
            good: number;
            fair: number;
          };
          deal_percentage: {
            great: number;
            good: number;
            fair: number;
          };
          deal: {
            great: number;
            good: number;
            fair: number;
          };
          sale_time: {
            great: {
              inf: number;
              sup: number;
            };
            good: {
              inf: number;
              sup: number;
            };
            fair: {
              inf: number;
              sup: number;
            };
          };
        };
        history: any;
      };
      mobi_price: number;
      fipe_price: number;
    };
    latestNews: Array<{
      version: number;
      id: number;
      headline: string;
      createdAt: number;
      updatedAt: number;
      publishDate: number;
      title: string;
      slug: string;
      channelId: number;
      channelName: string;
      subChannelId?: number;
      subChannelName?: string;
      writerId: number;
      writerName: string;
      summary: string;
      text: string;
      imageId: number;
      spotlight: boolean;
      source: string;
      video: string;
      galleryImageIds: Array<any>;
      vehicles: Array<any>;
      hasVideo: boolean;
      tags: Array<{
        name: string;
      }>;
      iframe: string;
      iframeHeight: string;
      cacheKey: number;
      cacheName: string;
      writerImageId?: number;
    }>;
    mostSearchedVehicles: Array<{
      id: number;
      name: string;
      makeId: string;
      makeName: string;
      imageId: number;
      imageHeroId: number;
      premium: boolean;
      minPrice: number;
      competitors: Array<{
        id: number;
        name: string;
      }>;
      unitsSold: number;
      inProduction: boolean;
      bodystyleId: number;
      bodystyleName: string;
      minFipePrice: number;
      hasFipePrice: boolean;
      fipePriceRange: Array<{
        year: number;
        minPrice: number;
        maxPrice: number;
      }>;
      videos: Array<any>;
    }>;
    relatedTrimsFipeInfo: Array<{
      id: number;
      name: string;
      makeName: string;
      modelName: string;
      initialYear: number;
      finalYear: number;
      fipeId: string;
      imported: boolean;
      inProduction: boolean;
      premium: boolean;
      fipePrice: number;
    }>;
    initialVehicleType: string;
  };
  __N_SSG: boolean;
};
