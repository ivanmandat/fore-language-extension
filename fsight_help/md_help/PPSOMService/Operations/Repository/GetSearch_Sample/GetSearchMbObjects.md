# BI-поиск индексированных метаданных объектов: Операция GetSearch

BI-поиск индексированных метаданных объектов: Операция GetSearch
-


**


# BI-поиск индексированных метаданных объектов


Ниже приведен пример использования операции [GetSearch](../GetSearch.htm)
 для BI-поиска индексированных объектов репозитория. В запросе передается
 текст для поиска, в ответе возвращается информация об объектах, в метаданных
 которых встретился указанный текст.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetSearch xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xmlns="****">
  <id>S1!M</id>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<GetMbObjectsArg>
  <text>куб</text>[![](../../../minus.gif)](../../../#)<pattern>
  <n>true</n>  <note>false</note>  <id>true</id>  <classId>true</classId>  <className>false</className>  <content>false</content>  <changeDate>false</changeDate>  </pattern>
  </GetMbObjectsArg>
  </tArg>
  </GetSearch>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetSearchResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<GetMbObjectsResult xmlns="****">
  <resCount>1</resCount>[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <n>Куб</n>  <hlName><hlt>Куб</hlt></hlName>[![](../../../minus.gif)](../../../#)<customRes>
[![](../../../minus.gif)](../../../#)<Item>
  <fName>tag</fName>[![](../../../minus.gif)](../../../#)<its>
  <Item>Тестовый куб с фиктивными данными</Item>  </its>
[![](../../../minus.gif)](../../../#)<hlIts>
  <Item>Тестовый <hlt>куб</hlt> с фиктивными данными</Item>  </hlIts>
  </Item>
  </customRes>
  <docId>19815|OBJ19815</docId>  <k>19815</k>  <Id>19815|OBJ19815</Id>  <hlId />
  <classId>1281</classId>  </it>
  </its>
  </GetMbObjectsResult>
  </GetSearchResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../../Opened.gif)![](../../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetSearch" :
  {
   "tMb" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "GetMbObjectsArg" :
      {
       "text" : "куб",
       "pattern" :
        {
         "n" : "true",
         "note" : "false",
         "id" : "true",
         "classId" : "true",
         "className" : "false",
         "content" : "false",
         "changeDate" : "false"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetSearchResult" :
  {
   "GetMbObjectsResult" :
    {
     "resCount" : "1",
     "its" :
      {
       "it" :
        [
          {
           "n" : "Куб",
           "hlName" : "<hlt>Куб<\/hlt>",
           "customRes" :
            {
             "Item" :
              {
               "fName" : "tag",
               "its" :
                {
                 "Item" : "Тестовый куб с фиктивными данными"
                },
               "hlIts" :
                {
                 "Item" : "Тестовый <hlt>куб<\/hlt> с фиктивными данными"
                }
              }
            },
           "docId" : "19815|OBJ19815",
           "k" : "19815",
           "Id" : "19815|OBJ19815",
           "hlId" : "",
           "classId" : "1281"
          }
        ]
      }
    }
  }
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:TextPopup(this))


public static GetSearchResult BiSearchMBObject(string mb, string text)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetSearch()
    {
        tArg = new GetSearchArg()
        {
            GetMbObjectsArg = new SearchMbObjectsArg()
            {
                pattern = new SearchMbObjectsPattern()
                {
                    changeDate = false,
                    classId = true,
                    className = false,
                    note = false
                },
                text = text
            }
        },
        tMb = new MbId() { id = mb }
    };
    //BI-поиск индексированных объектов
    var result = somClient.GetSearch(tGet);
    return result;
}


См. также:


[GetSearch:
 Операция](../GetSearch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
