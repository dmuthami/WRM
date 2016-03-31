      var map = new ol.Map({
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          }),
		  new ol.layer.Image({
			  extent: ol.proj.transformExtent([39.6831389000001,0.0090278000000694,40.9825278000001,0.352277800000024], 'EPSG:4326', 'EPSG:3857'),
			  source: new ol.source.ImageWMS({
				url: 'http://localhost:8080/geoserver/water_resource_mapping/wms',
				params: {'LAYERS': 'water_resource_mapping:XYBoreholes_Clean'},
				serverType: 'geoserver'
			  })
			})
        ],
        target: 'map',
        controls: ol.control.defaults({
          attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
            collapsible: false
          })
        }),
        view: new ol.View({
          center: [0, 0],
          zoom: 2
        })
      });

      document.getElementById('zoom-out').onclick = function() {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom - 1);
      };

      document.getElementById('zoom-in').onclick = function() {
        var view = map.getView();
        var zoom = view.getZoom();
        view.setZoom(zoom + 1);
      };