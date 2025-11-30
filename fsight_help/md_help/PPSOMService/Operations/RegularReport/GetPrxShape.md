# GetPrxShape: Операция

GetPrxShape: Операция
-


**


# GetPrxShape


## Синтаксис


PrxShapeParams GetPrxShape(PrxShapeId shapeMon)


## Параметры


shapeMon. Моникёр
 фигуры.


## Описание


Операция GetPrxShape получает
 настройки фигуры, расположенной на листе регламентного отчёта.


## Комментарии


Для выполнения операции укажите в поле shapeMon
 моникёр фигуры. Моникёр может быть сформирован на базе моникёра регламентного
 отчёта по следующему правилу: «Моникёр
 экземпляра рег.отчёта!Sheets!ключ листа!Objects!идентификатор фигуры».


Результатом выполнения операции будут полученные настройки фигуры.


## Пример


Ниже приведён пример получения настроек фигуры, расположенной на листе
 регламентного отчёта. В запросе передаётся моникёр фигуры. В ответе возвращаются
 полученные настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetPrxShape xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<shapeMon xmlns="****">
  <id>NIOJJPAOELHBGOAEEIPNMJOEPPNPDKCEFLNNFGPGJHAJAIHA!M!S!PKKFPIABOELHBGOAEKKGBBGANBJNMDDAEDLCBNPPIFFBBMNNG!Sheets!1!Objects!PrxShape1</id>  </shapeMon>
  </GetPrxShape>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetPrxShapeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <t xmlns="****">4</t>[![](../../minus.gif)](../../#)<bca xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <color r="**255**" g="**255**" b="**255**" />
  </it>
  </bca>
[![](../../minus.gif)](../../#)<bdca xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <color r="**0**" g="**0**" b="**0**" />
  </it>
  </bdca>
  <bw xmlns="****">0.25</bw>  <bp xmlns="****">0</bp>  <lec xmlns="****">0</lec>  <lbc xmlns="****">0</lbc>  <ww xmlns="****">1</ww>  <txt xmlns="****" />
  <fs xmlns="****" F="**Arial**" S="**10**" C="**#000000FF**" I="**0**" B="**0**" U="**0**" SO="**0**" />
  <va xmlns="****">1</va>  <ha xmlns="****">1</ha>  <ofs xmlns="****" left="**0**" top="**0**" right="**0**" bottom="**0**" />
  </GetPrxShapeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxShape" :
  {
   "shapeMon" :
    {
     "id" : "NIOJJPAOELHBGOAEEIPNMJOEPPNPDKCEFLNNFGPGJHAJAIHA!M!S!PKKFPIABOELHBGOAEKKGBBGANBJNMDDAEDLCBNPPIFFBBMNNG!Sheets!1!Objects!PrxShape1"
    }
  }
}

### JSON-ответ:


{
 "GetPrxShapeResult" :
  {
   "t" : "4",
   "bca" :
    {
     "it" :
      {
       "color" :
        {
         "@r" : "255",
         "@b" : "255",
         "@g" : "255"
        }
      }
    },
   "bdca" :
    {
     "it" :
      {
       "color" :
        {
         "@r" : "0",
         "@b" : "0",
         "@g" : "0"
        }
      }
    },
   "bw" : "0.25",
   "bp" : "0",
   "lec" : "0",
   "lbc" : "0",
   "ww" : "1",
   "txt" : "",
   "fs" :
    {
     "@B" : "0",
     "@SO" : "0",
     "@S" : "10",
     "@C" : "#000000FF",
     "@U" : "0",
     "@F" : "Arial",
     "@I" : "0"
    },
   "va" : "1",
   "ha" : "1",
   "ofs" :
    {
     "@top" : "0",
     "@bottom" : "0",
     "@left" : "0",
     "@right" : "0"
    }
  }
}


public static PrxShapeParams GetPrxShape(string moniker, uint sheetKey, string shapeId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPrxShape()
    {
        shapeMon = new PrxShapeId()
        {
            id = moniker + "!Sheets!" + sheetKey + "!Objects!" + shapeId
        }
    };
    // Получение настроек фигуры
    var result = somClient.GetPrxShape(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
