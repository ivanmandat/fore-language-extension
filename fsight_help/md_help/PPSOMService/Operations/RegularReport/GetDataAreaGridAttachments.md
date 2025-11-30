# GetDataAreaGridAttachments: Операция

GetDataAreaGridAttachments: Операция
-


**


# GetDataAreaGridAttachments


## Синтаксис


EaxAttachments GetDataAreaGridAttachments(string
 mon, EaxAttachmentPattern tPattern)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tPattern. Шаблон выполнения
 операции.


## Описание


Операция GetDataAreaGridAttachments
 получает список вложений для ячейки таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!«ключ
 источника»!DataSourceSlices!«ключ среза»!Views!«ключ таблицы».
 Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 В поле tPattern укажите координаты
 ячейки, для которой необходимо получить вложения.


Результатом операции будет полученный список вложений.


## Пример


Ниже приведён пример получения списка вложений, добавленных для ячейки
 таблицы. В запросе передаётся моникёр таблицы и координаты ячейки. В ответе
 возвращается полученный список вложений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDataAreaGridAttachments xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MEIAHFNGIHOCGOAEIHCLFJLBBEPLGOEELKAMEOCBAIKLGBGC!M!S!PJOILJGNGIHOCGOAEGFPAJAHCFFGJOBPEBIDPPGBPPHEIJJHB!DataArea!DataSources!1!DataSourceSlices!1!Views!1</mon>[![](../../minus.gif)](../../#)<tPattern xmlns="****">
  <row>3</row>  <column>2</column>  </tPattern>
  </GetDataAreaGridAttachments>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDataAreaGridAttachmentsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <key>8</key>  <name>Источник данных</name>  <type>URL</type>  <url>https://rosstat.gov.ru/statistic</url>  <date>2024-05-15T18:17:43.000</date>  <user>Пользователь ADMIN</user>  </it>
[![](../../minus.gif)](../../#)<it>
  <key>9</key>  <name>Рисунок1</name>  <type>Value</type>  <fileName>Рисунок1.png</fileName>  <date>2020-04-20T15:00:06.000</date>  <size>3327</size>  <user>Пользователь ADMIN</user>  </it>
  </its>
  </GetDataAreaGridAttachmentsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDataAreaGridAttachments" :
  {
   "mon" : "MEIAHFNGIHOCGOAEIHCLFJLBBEPLGOEELKAMEOCBAIKLGBGC!M!S!PJOILJGNGIHOCGOAEGFPAJAHCFFGJOBPEBIDPPGBPPHEIJJHB!DataArea!DataSources!1!DataSourceSlices!1!Views!1",
   "tPattern" :
    {
     "row" : "3",
     "column" : "2"
    }
  }
}

### JSON-ответ:


{
 "GetDataAreaGridAttachmentsResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "key" : "8",
         "name" : "Источник данных",
         "type" : "URL",
         "url" : "https:\/\/rosstat.gov.ru\/statistic",
         "date" : "2024-05-15T18:17:43.000",
         "user" : "Пользователь ADMIN"
        },
        {
         "key" : "9",
         "name" : "Рисунок1",
         "type" : "Value",
         "fileName" : "Рисунок1.png",
         "date" : "2020-04-20T15:00:06.000",
         "size" : "3327",
         "user" : "Пользователь ADMIN"
        }
      ]
    }
  }
}


public static EaxAttachments GetDataAreaGridAttachments(string moniker, uint sourceKey, uint sliceKey, uint viewKey, uint cellRow, uint cellColumn)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetDataAreaGridAttachments()
    {
        tPattern = new EaxAttachmentPattern()
        {
            row = cellRow,
            column = cellColumn
        },
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    // Получение информации о вложениях ячейки
    var result = somClient.GetDataAreaGridAttachments(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
