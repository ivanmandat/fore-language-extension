# PrxObjectCreate: Операция

PrxObjectCreate: Операция
-


**


# PrxObjectCreate


## Синтаксис


PrxObjectCreateResult PrxObjectCreate(string mon,
 string objectType)


## Параметры


mon. Моникёр
 листа регламентного отчёта.


objectType. Тип создаваемого
 объекта.


## Описание


Операция PrxObjectCreate создаёт
 новый объект на листе регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр в следующем формате: «Моникёр
 экземпляра рег.отчёта!Sheets!Ключ листа», а в поле objectType
 тип создаваемого объекта. Допустимые значения для поля objectType:


	- PrxPicture - изображение;


	- PrxChart - диаграмма;


	- PrxScene3D - 3D-сцена;


	- PrxSpeedometer - спидометр;


	- PrxMap - карта;


	- PrxMapTerritoryInfo - расшифровка территорий карты;


	- PrxMapLegend - легенда карты;


	- PrxShape - автофигура;


	- PrxFlowDocument - форматированный текст;


	- PrxVisualizer - легенда визуализатора.


Моникёр экземпляра регламентного отчёта может быть получен при выполнении
 операции [OpenPrxMeta](OpenPrxMeta.htm).


Результатом операции будет идентификатор созданного объекта.


## Пример


Ниже приведён пример создания новой диаграммы на листе регламентного
 отчёта. В запросе передаётся моникёр листа и создаваемый тип объекта -
 диаграмма. В ответе возвращается идентификатор созданной диаграммы.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<PrxObjectCreate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1</mon>  <objectType xmlns="****">PrxChart</objectType>  </PrxObjectCreate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<PrxObjectCreateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <id xmlns="****">PrxChart3</id>  </PrxObjectCreateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "PrxObjectCreate" :
  {
   "mon" : "S1!M!S!P1!Sheets!1",
   "objectType" : "PrxChart"
  }
}

### JSON-ответ:


{
 "PrxObjectCreateResult" :
  {
   "id" : "PrxChart3"
  }
}


public static PrxObjectCreateResult CreatePrxChart(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tCreate = new PrxObjectCreate()
    {
        objectType = "PrxChart",
        mon = moniker + "!Sheets!1"
    };
    //Создание диаграммы
    var result = somClient.PrxObjectCreate(tCreate);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
