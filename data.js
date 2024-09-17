var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.764793191854409,
        "pitch": -0.42938923282929586,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.761275918735265,
          "pitch": -0.11316289882508457,
          "rotation": 0,
          "target": "1-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-hall",
      "name": "Entrance Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8718009899458163,
        "pitch": 0.1350327724699305,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6021507759475746,
          "pitch": 0.3276010415801949,
          "rotation": 0,
          "target": "0-front"
        },
        {
          "yaw": 0.85144470168688,
          "pitch": 0.38028577587132517,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": 0.010785973338483856,
          "pitch": 0.46314761716207187,
          "rotation": 5.497787143782138,
          "target": "11-bedroom-1"
        },
        {
          "yaw": 1.543141481002941,
          "pitch": -0.33469366704016323,
          "rotation": 5.497787143782138,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living-room",
      "name": "Living Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.3165836967679816,
        "pitch": 0.31965482889886765,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8727188444285439,
          "pitch": 0.37868390207701097,
          "rotation": 0,
          "target": "1-entrance-hall"
        },
        {
          "yaw": 2.2398996037936527,
          "pitch": 0.3024728313708209,
          "rotation": 0,
          "target": "3-backyard"
        },
        {
          "yaw": 2.843432597557089,
          "pitch": 0.4092964351089208,
          "rotation": 0,
          "target": "4-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-backyard",
      "name": "Backyard",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 2.7618768033662917,
        "pitch": -0.5647659798176754,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.327281600631064,
          "pitch": -0.0498087261387532,
          "rotation": 0,
          "target": "2-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-to-basement",
      "name": "To Basement",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.1894755271828288,
        "pitch": 0.816951551158386,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07176311455758544,
          "pitch": 0.5968445466949444,
          "rotation": 0,
          "target": "2-living-room"
        },
        {
          "yaw": -1.390693040076119,
          "pitch": 0.8645102627310273,
          "rotation": 0.7853981633974483,
          "target": "5-kitchenutility"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchenutility",
      "name": "Kitchen/Utility",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.6211936656496873,
        "pitch": 0.2934427409369391,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.09576960820446,
          "pitch": 0.414916524823731,
          "rotation": 18.06415775814132,
          "target": "4-to-basement"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.805676468297504,
        "pitch": 0.5930730595746478,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4141695081528418,
          "pitch": 0.5503666072436459,
          "rotation": 0,
          "target": "9-bathroom-1"
        },
        {
          "yaw": 1.826772305679313,
          "pitch": 0.5618221385287718,
          "rotation": 0,
          "target": "7-i-floor"
        },
        {
          "yaw": -3.0641393572676954,
          "pitch": 0.3545028792753371,
          "rotation": 0,
          "target": "13-bedroom-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-i-floor",
      "name": "I Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 1.4535154316187526,
        "pitch": 0.15975958241662092,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.9109378093510294,
          "pitch": 0.6394968265106709,
          "rotation": 0,
          "target": "6-i-floor"
        },
        {
          "yaw": 1.1258510332267857,
          "pitch": 0.47448208064005115,
          "rotation": 0,
          "target": "10-bathroom-2"
        },
        {
          "yaw": 1.9591725358249636,
          "pitch": 0.3755266997295337,
          "rotation": 0.7853981633974483,
          "target": "12-bedroom-2"
        },
        {
          "yaw": -1.1507963964354175,
          "pitch": 0.023260846780036815,
          "rotation": 11.780972450961727,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-ii-floor",
      "name": "II Floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.7783313337335773,
        "pitch": 0.000484447705463964,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9459998934840002,
          "pitch": 0.5527595416691362,
          "rotation": 0,
          "target": "15-bedroom-5"
        },
        {
          "yaw": 0.14460179278690077,
          "pitch": 0.15218279808815893,
          "rotation": 0,
          "target": "14-bedroom-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.3529478968376552,
        "pitch": 0.9025336871577494,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2479411176158752,
          "pitch": 0.3994613210725966,
          "rotation": 0,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -2.7635148585031803,
        "pitch": 1.1260507988482331,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0733332101623194,
          "pitch": 0.2271250930500237,
          "rotation": 0,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.8178916397564464,
        "pitch": 0.39681472914379334,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7598349255095922,
          "pitch": 0.37066979598745675,
          "rotation": 0,
          "target": "1-entrance-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -1.6908275122300367,
        "pitch": 0.6426537317417651,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.832493950214662,
          "pitch": 0.2342077623844041,
          "rotation": 0.7853981633974483,
          "target": "7-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.9125649775246174,
        "pitch": 0.8057317541880984,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8876449555651345,
          "pitch": 0.35514637156377127,
          "rotation": 0,
          "target": "6-i-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": 0.8243127604456166,
        "pitch": 0.7563968065828828,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9689507544038136,
          "pitch": 0.2523532698638675,
          "rotation": 0,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-5",
      "name": "Bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1728,
      "initialViewParameters": {
        "yaw": -0.829239997233099,
        "pitch": 0.3947417112549232,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.68523868691344,
          "pitch": 0.3882419949434457,
          "rotation": 0,
          "target": "8-ii-floor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "7 Hessle Terrace",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
