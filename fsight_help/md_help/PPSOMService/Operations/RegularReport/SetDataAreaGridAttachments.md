# SetDataAreaGridAttachments: Операция

SetDataAreaGridAttachments: Операция
-


**


# SetDataAreaGridAttachments


## Синтаксис


EaxAttachmentChangeResult SetDataAreaGridAttachments(string
 mon, EaxAttachmentPattern tPattern, EaxAttachments tArg)


## Параметры


mon. Моникёр
 визуализатора Таблица.


tPattern. Шаблон выполнения
 операции.


tArg. Вложения, которые необходимо
 прикрепить к ячейке.


## Описание


Операция SetDataAreaGridAttachments
 изменяет список вложений для ячейки таблицы.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources!ключ
 источника!DataSourceSlices!ключ среза!Views!ключ таблицы». Моникёр
 может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).
 В поле tPattern укажите координаты
 ячейки, для которой необходимо изменить вложения, а в поле tArg
 список вложений и действия с ними.


Результатом операции будет информация об изменённом вложении.


При добавлении нового вложения, после выполнения операции SetDataAreaGridAttachments,
 само вложение необходимо загрузить на BI-сервер с помощью операции [PutBin](../../Additional/PutBin.htm). В качестве моникёра
 для [PutBin](../../Additional/PutBin.htm) укажите моникёр для
 SetDataAreaGridAttachments + «!Attachments!ключ вложения». Ключ
 вложения будет доступен в результате операции SetDataAreaGridAttachments.


## Пример


Ниже приведён пример добавления вложения для ячейки таблицы. В запросе
 передаётся моникёр таблицы, координаты ячейки и информация о добавляемом
 вложении. В ответе возвращаются метаданные вложения, содержащие ключ,
 который должен использоваться операцией PutBin для фактической загрузки
 файла на BI-сервер.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDataAreaGridAttachments xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">MEIAHFNGIHOCGOAEIHCLFJLBBEPLGOEELKAMEOCBAIKLGBGC!M!S!PJOILJGNGIHOCGOAEGFPAJAHCFFGJOBPEBIDPPGBPPHEIJJHB!DataArea!DataSources!1!DataSourceSlices!1!Views!1</mon>[![](../../minus.gif)](../../#)<tPattern xmlns="****">
  <row>3</row>  <column>2</column>  </tPattern>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <name>readmy</name>  <type>Value</type>  <fileName>readmy.txt</fileName>  <date>2024-05-15T00:00:00+05:00</date>  <size>100</size>  <changeType>Add</changeType>  </it>
  </its>
  </tArg>
  </SetDataAreaGridAttachments>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDataAreaGridAttachmentsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<item xmlns="****">
  <key>4294967196</key>  <name>readmy</name>  <type>Value</type>  <fileName>readmy.txt</fileName>  <date>2024-05-15T00:00:00.000</date>  <size>100</size>  <user>Пользователь ADMIN</user>  </item>
  </SetDataAreaGridAttachmentsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDataAreaGridAttachments" :
  {
   "mon" : "MEIAHFNGIHOCGOAEIHCLFJLBBEPLGOEELKAMEOCBAIKLGBGC!M!S!PJOILJGNGIHOCGOAEGFPAJAHCFFGJOBPEBIDPPGBPPHEIJJHB!DataArea!DataSources!1!DataSourceSlices!1!Views!1",
   "tPattern" :
    {
     "row" : "3",
     "column" : "2"
    },
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "name" : "readmy",
           "type" : "Value",
           "fileName" : "readmy.txt",
           "date" : "2024-05-15T00:00:00+05:00",
           "size" : "100",
           "changeType" : "Add"
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "SetDataAreaGridAttachmentsResult" :
  {
   "item" :
    {
     "key" : "4294967196",
     "name" : "readmy",
     "type" : "Value",
     "fileName" : "readmy.txt",
     "date" : "2024-05-15T00:00:00.000",
     "size" : "100",
     "user" : "Пользователь ADMIN"
    }
  }
}


public static EaxAttachmentChangeResult SetDataAreaGridAttachments(string moniker, uint sourceKey, uint sliceKey, uint viewKey, uint cellRow, uint cellColumn, EaxAttachments attach)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetDataAreaGridAttachments()
    {
        tPattern = new EaxAttachmentPattern()
        {
            row = cellRow,
            column = cellColumn
        },
        tArg = attach,
        mon = moniker + "!DataArea!DataSources!" + sourceKey.ToString() + "!DataSourceSlices!" + sliceKey.ToString() + "!Views!" + viewKey.ToString()
    };
    // Изменение вложений ячейки
    var result = somClient.SetDataAreaGridAttachments(tSet);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
