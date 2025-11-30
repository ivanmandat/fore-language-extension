# GetPrxStyleSheet: Операция

GetPrxStyleSheet: Операция
-


**


# GetPrxStyleSheet


## Синтаксис


GetPrxStyleSheetResult GetPrxStyleSheet(string mon,
 StyleSheetMdPattern tPattern)


## Параметры


mon. Моникёр
 открытого экземпляра регламентного отчёта.


tPattern. Шаблон выполнения
 операции.


## Описание


Операция GetPrxStyleSheet получает
 таблицу стилей, подключенную в регламентном отчёте.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта, а в поле tPattern
 шаблон, в соответствии с которым будет получена информация о таблице
 стилей. Моникёр может быть получен при выполнении операции [OpenPrxMeta](../OpenPrxMeta.htm).


Результатом выполнения операции будет информация о таблице стилей.


## Пример


Ниже приведён пример получения информации о таблице стилей, подключенной
 к регламентному отчёту. В запросе передаётся моникёр открытого экземпляра
 регламентного отчёта. В ответе возвращается полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetPrxStyleSheet xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">BHGFKLHCBNDPFOAEABNELEOBLJJGGNLEBKOPJFEJDMKMADKA!M!S!PDBPIEBICBNDPFOAELDHONAGEJFGJIEMEGINMKELIDHFLHMIB</mon>[![](../../../minus.gif)](../../../#)<tPattern xmlns="****">
  <preview>true</preview>[![](../../../minus.gif)](../../../#)<ps>
  <width>200</width>  <height>100</height>  </ps>
  </tPattern>
  </GetPrxStyleSheet>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetPrxStyleSheetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id />
  </id>
[![](../../../minus.gif)](../../../#)<key xmlns="****">
  <k>317260</k>  </key>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
  <name>Таблица стилей</name>  <type>0</type>[![](../../../minus.gif)](../../../#)<items>
[![](../../../minus.gif)](../../../#)<it>
  <key>1</key>  <tag>TAB</tag>  <preview>iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI2SURBVHhe7dnhbaMwAIZhxmMgxmEXVskmPgwpNQG+qtUd6UnPIyHFMYU/fmtouwJcEggEAoHgGMhjLH3XlW47hjI9p95rKkPXl/HxHMIN9oFMwxzEfhE+xv4XRFLjqLEKhHs1gayLcDiU8Chj35X+TStzDXS+/zDMO5tAuNdnIMujVdopPn6Lvxy1qNefXXaiZnx4bKvHc/6L+z6maU60fqjnCYR7fQZSF3U/rosxOtlRdot8nT8GcjH+IpCNQHiDvx/IfJ1hDEFUAuE/8Y1HrA8pkHlumCN7vVYaL5/3j1+n7zvLeQLhXs1L+rrwjy/pdVOYF+42EQKpu0c9LQVRtePTuZMQrr6Hf6gJZLa8XO8X4fpXpPa7q0D60tfdYxv/MJD50+n/O573EAh32gdSLQuxfeRpF291FUiz+2yLfj13uU67NbVRHO7nEYvf4xgIsBEIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgELhUyh/L4CwT6D/tVwAAAABJRU5ErkJggg==</preview>  <name>Стиль1</name>  <id>I1</id>  </it>
  </items>
  </meta>
  </GetPrxStyleSheetResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetPrxStyleSheet" :
  {
   "mon" : "BHGFKLHCBNDPFOAEABNELEOBLJJGGNLEBKOPJFEJDMKMADKA!M!S!PDBPIEBICBNDPFOAELDHONAGEJFGJIEMEGINMKELIDHFLHMIB",
   "tPattern" :
    {
     "preview" : "true",
     "ps" :
      {
       "width" : "200",
       "height" : "100"
      }
    }
  }
}

### JSON-ответ:


{
 "GetPrxStyleSheetResult" :
  {
   "id" :
    {
     "id" : ""
    },
   "key" :
    {
     "k" : "317260"
    },
   "meta" :
    {
     "name" : "Таблица стилей",
     "type" : "0",
     "items" :
      {
       "it" :
        {
         "key" : "1",
         "tag" : "TAB",
         "preview" : "iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAI2SURBVHhe7dnhbaMwAIZhxmMgxmEXVskmPgwpNQG+qtUd6UnPIyHFMYU\/fmtouwJcEggEAoHgGMhjLH3XlW47hjI9p95rKkPXl\/HxHMIN9oFMwxzEfhE+xv4XRFLjqLEKhHs1gayLcDiU8Chj35X+TStzDXS+\/zDMO5tAuNdnIMujVdopPn6Lvxy1qNefXXaiZnx4bKvHc\/6L+z6maU60fqjnCYR7fQZSF3U\/rosxOtlRdot8nT8GcjH+IpCNQHiDvx\/IfJ1hDEFUAuE\/8Y1HrA8pkHlumCN7vVYaL5\/3j1+n7zvLeQLhXs1L+rrwjy\/pdVOYF+42EQKpu0c9LQVRtePTuZMQrr6Hf6gJZLa8XO8X4fpXpPa7q0D60tfdYxv\/MJD50+n\/O573EAh32gdSLQuxfeRpF291FUiz+2yLfj13uU67NbVRHO7nEYvf4xgIsBEIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgEAgEAoFAIBAIBAKBQCAQCAQCgUAgELhUyh\/L4CwT6D\/tVwAAAABJRU5ErkJggg==",
         "name" : "Стиль1",
         "id" : "I1"
        }
      }
    }
  }
}


public static GetStyleSheetResult GetPrxStyleSheet(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetPrxStyleSheet()
    {
        tPattern = new StyleSheetMdPattern()
        {
            preview = true,
            ps = new Size() { height = 100, width = 200 }
        },
        mon = moniker
    };
    // Получение информации о таблице стилей
    var result = somClient.GetPrxStyleSheet(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](../RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
