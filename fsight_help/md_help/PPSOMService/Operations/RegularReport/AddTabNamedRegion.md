# AddTabNamedRegion: Операция

AddTabNamedRegion: Операция
-


**


# AddTabNamedRegion


## Синтаксис


TabNamedRegionOpResult AddTabNamedRegion(NamedRegionsId
 nrMon, TabNamedRegion Region)


## Параметры


nrMon. Моникёр
 для работы с именованными диапазонами.


Region. Параметры добавляемого
 именованного диапазона.


## Описание


Операция AddTabNamedRegion создаёт
 именованный диапазон на листе регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле nrMon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!Ключ
 листа!NamedRegions», а в поле Region
 параметры создаваемого именованного диапазона. Моникёр может быть получен
 при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом выполнения операции будет информация об успешном создании
 именованного диапазона.


## Пример


Ниже приведён пример создания именованного диапазона на первом листе
 регламентного отчёта. В запросе передаётся моникёр для работы с именованными
 диапазонами и настройки создаваемого диапазона. В ответе возвращается
 признак успешного создания и наименование созданного именованного диапазона.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<AddTabNamedRegion xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<nrMon xmlns="****">
  <id>ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO!Sheets!1!NamedRegions</id>  </nrMon>
[![](../../minus.gif)](../../#)<Region xmlns="****">
  <left>1</left>  <top>1</top>  <width>10</width>  <height>2</height>  <borderColor>4294901760</borderColor>  <name>Заголовок</name>  </Region>
  </AddTabNamedRegion>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<AddTabNamedRegionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>  <name xmlns="****">Заголовок</name>  </AddTabNamedRegionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "AddTabNamedRegion" :
  {
   "nrMon" :
    {
     "id" : "ILBNJNHKDBCAGOAEGGMCAJHIOKJPOKMEOIOADBDOFONILPAG!M!S!PAJBBFBIKDBCAGOAEJOAGHLNCNALCNCJEOLBLLFIDBFHIGLPO!Sheets!1!NamedRegions"
    },
   "Region" :
    {
     "left" : "1",
     "top" : "1",
     "width" : "10",
     "height" : "2",
     "borderColor" : "4294901760",
     "name" : "Заголовок"
    }
  }
}

### JSON-ответ:


{
 "AddTabNamedRegionResult" :
  {
   "res" : "1",
   "name" : "Заголовок"
  }
}


public static TabNamedRegionOpResult AddTabNamedRegion(string moniker, string regionName, int leftCell, int topCell, uint bottomCell, uint rightCell)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tAdd = new AddTabNamedRegion()
    {
        nrMon = new NamedRegionsId() { id = moniker + "!Sheets!1!NamedRegions" },
        Region = new TabNamedRegion()
        {
            left = leftCell,
            top = topCell,
            height = bottomCell,
            width = rightCell,
            name = regionName,
            borderColor = 4294901760 // Red
        }
    };
    // Создание именованного диапазона
    var result = somClient.AddTabNamedRegion(tAdd);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
