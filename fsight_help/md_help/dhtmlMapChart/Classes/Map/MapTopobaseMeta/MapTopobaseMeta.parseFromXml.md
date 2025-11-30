# MapTopobaseMeta.parseFromXml

MapTopobaseMeta.parseFromXml
-


# MapTopobaseMeta.parseFromXml


## Синтаксис


PP.MapTopobaseMeta.parseFromXml(node: String | HTMLElement);


## Параметры


node. Анализируемый DOM-элемент или строка.


## Описание


Метод parseFromXml выполняет анализ данных указанного DOM-элемента или строки.


## Комментарии


Данный метод является статическим и возвращает объект типа [PP.MapTopobaseMeta](MapTopobaseMeta.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента [MapChart](../../../Components/MapChart/MapChart.htm) с наименованием «map» (см. «[Размещение карты на HTML странице](../../../Components/MapChart/HTML_layout.htm)»). Проанализируем заданную строку с XML-содержимым и определим географическую широту и долготу карты, а также значение элемента «RU-KYA» у атрибута «OriginOffset»:


var metaInfo = "<metainfo><geo>" +
    "<geoItem longitude=\"37.617778\" latitude=\"55.751667\" x=\"0\" y=\"0\" /></geo>" +
    "<attributes><attribute name=\"OriginOffset\" type=\"point\">" +
    "<data id=\"RU-KYA\" value=\"0.75,0.5\" /></attribute></attributes>" +
    "</metainfo>";
// Выполним анализ данных XML-документа
var meta = PP.MapTopobaseMeta.parseFromXml(metaInfo);
// Получим географические координаты карты
var geo = meta.getGeo()[0];
console.log("Широта: " + geo.getLatitude() + ", долгота: " + geo.getLongitude());
// Определим значение элемента «RU-KYA» у атрибута «OriginOffset»
var value = meta.getAttributeDataValue("OriginOffset", "RU-KYA");
console.log("Значение элемента «RU-KYA» у атрибута «OriginOffset»: " + value);

В результате выполнения примера в консоли браузера были выведены географическая широта и долгота карты, а также значение элемента «RU-KYA» у атрибута «OriginOffset»:


Широта: 55.751667, долгота: 37.617778


Значение элемента «RU-KYA» у атрибута «OriginOffset»: 0.75,0.5


См. также:


[MapTopobaseMeta](MapTopobaseMeta.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
