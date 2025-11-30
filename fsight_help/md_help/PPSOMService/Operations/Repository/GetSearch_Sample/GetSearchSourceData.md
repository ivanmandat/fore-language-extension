# BI-поиск индексированных элементов измерений, формирующих срезы данных: Операция GetSearch

BI-поиск индексированных элементов измерений, формирующих срезы данных: Операция GetSearch
-


**


# BI-поиск индексированных элементов измерений, формирующих срезы данных


Ниже приведен пример использования операции [GetSearch](../GetSearch.htm)
 для BI-поиска индексированных элементов измерений. В запросе передается
 текст для поиска, в ответе возвращается информация о срезах данных, сформированных
 на базе найденных элементов измерений.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetSearch xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xmlns="****">
  <id>S1!M</id>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<GetSourceDataArg>
  <text>Russia</text>[![](../../../minus.gif)](../../../#)<pattern>
  <n>true</n>  <note>true</note>  <time>true</time>  <dateLevels>true</dateLevels>  <freeDims>true</freeDims>  <sourceMeta>false</sourceMeta>  <factorKeys>false</factorKeys>  </pattern>
  </GetSourceDataArg>
  </tArg>
  </GetSearch>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetSearchResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<GetSourceDataResult xmlns="****">
  <resCount>1</resCount>[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <n>Russia</n>  <hlName><hlt>Russia</hlt></hlName>  <note />
  <customRes />
  <docId>5472|38</docId>[![](../../../minus.gif)](../../../#)<time>
  <s>2000</s>  <s>2001</s>  <s>2002</s>  <s>2003</s>  <s>2004</s>  <s>2005</s>  <s>2006</s>  <s>2007</s>  <s>2008</s>  <s>2009</s>  <s>2010</s>  <s>2011</s>  <s>2012</s>  <s>2013</s>  </time>
  </it>
  </its>
  </GetSourceDataResult>
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
     "GetSourceDataArg" :
      {
       "text" : "Russia",
       "pattern" :
        {
         "n" : "true",
         "note" : "true",
         "time" : "true",
         "dateLevels" : "true",
         "freeDims" : "true",
         "sourceMeta" : "false",
         "factorKeys" : "false"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetSearchResult" :
  {
   "GetSourceDataResult" :
    {
     "resCount" : "1",
     "its" :
      {
       "it" :
        [
          {
           "n" : "Russia",
           "hlName" : "<hlt>Russia<\/hlt>",
           "note" : "",
           "customRes" : "",
           "docId" : "5472|38",
           "time" :
            {
             "s" :
              [
                "2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013"
              ]
            }
          }
        ]
      }
    }
  }
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:TextPopup(this))


public static GetSearchResult BiSearchSourceData(string mb, string text)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetSearch()
    {
        tArg = new GetSearchArg()
        {
            GetSourceDataArg = new SearchSourceDataArg()
            {
                pattern = new SearchSourceDataPattern()
                {
                    sourceMeta = false
                },
                text = text
            }
        },
        tMb = new MbId() { id = mb }
    };
    //BI-поиск индексированной информации об элементах измерений
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
