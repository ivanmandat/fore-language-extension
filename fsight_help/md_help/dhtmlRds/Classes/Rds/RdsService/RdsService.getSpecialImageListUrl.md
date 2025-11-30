# RdsService.getSpecialImageListUrl

RdsService.getSpecialImageListUrl
-


# RdsService.getSpecialImageListUrl


## Синтаксис


getSpecialImageListUrl();


## Описание


Метод getSpecialImageListUrl
 возвращает адрес списка изображений атрибутов.


## Комментарии


Метод возвращает значение, содержащее моникёр репозитория и адрес списка
 изображений, вида:


"PPService.axd?action=proxy/GetBin?mon=JJLAHJPNOCHKEOAEDHLBKEPGKIHJKOEEKLNALAKAIONCBDFG!M!$Special!DimensionImageList&cache"


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Получим адрес списка изображений
 атрибутов:


// Получим справочник НСИ
var source = dictionaryBox.getSource()[0];
// Получим сервис для работы со справочником
var service = source.getPPService();
// Получим адрес
service.getSpecialImageListUrl();
В результате выполнения примера в консоль был выведен адрес списка изображений
 атрибутов.


См. также:


[RdsService](RdsService.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
