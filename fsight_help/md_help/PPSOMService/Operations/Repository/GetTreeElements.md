# GetTreeElements: Операция

GetTreeElements: Операция
-


**


# GetTreeElements


## Синтаксис


GetTreeElementsResult GetTreeElements(TreeId tTree,
 GetTreeElementsArg tArg)


## Параметры


tTree. Моникёр объекта, для
 которого выполняется операция.


tArg. Параметры получения дерева
 метаданных.


## Описание


Операция GetTreeElements извлекает
 дерево метаданных объекта репозитория.


## Комментарии


Данная операция позволяет получить информацию о каком-либо объекте репозитория
 в виде дерева элементов. Информация, хранящаяся в элементах, в дальнейшем
 может использоваться для составления формул. В текущей реализации операция
 поддерживает работу с экспресс-отчётом и объектами в задаче ETL.


Для выполнения операции необходимо в tTree
 указать сформированный моникёр дерева, а в tArg
 указать параметры извлечения элементов с метаданными.


Моникёр формируется в одном из следующих форматов:


	- «моникёр экспресс-отчёта»!Sheets!«ключ
	 листа»!MtdTree - для получения информации о структуре источников,
	 лежащих в основе экспресс-отчета;


	- «моникёр задачи ETL»!Objects!«индекс
	 объекта в задаче ETL»!MtdTree - для получения информации о
	 связях объекта с другими объектами в задаче ETL.


	- «моникёр вычисляемого куба»!Params!MtdTree
	 - для получения информации о параметрах, которые могут использоваться
	 в формулах вычисляемого куба.


	- «моникёр из поля cachedDatasetId»!MtdTree
	 - для получения полей, которые могут использоваться при настройке
	 фильтрации данных какого-либо реляционного объекта.


Полученные элементы с метаданными будут доступны в результате выполнения
 операции в поле els.


## Пример


Ниже приведен пример использования операции GetTreeElements
 для получения дерева метаданных для указанного листа экспресс-отчета.
 В запросе передаются моникёр экспресс-отчета и ключ листа. В ответе приходит
 набор элементов с метаданными.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTreeElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTree xmlns="****">
  <id>S1!M!S!E1!Sheets!189!MtdTree</id>  </tTree>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<parent>
  <key />
  </parent>
[![](../../minus.gif)](../../#)<filter>
[![](../../minus.gif)](../../#)<text>
  <text>Элемент</text>  <searchName>true</searchName>  <searchId>false</searchId>  </text>
  <includeParents>false</includeParents>  </filter>
[![](../../minus.gif)](../../#)<pattern>
  <getParentKey>true</getParentKey>  <getHasChildren>true</getHasChildren>  <getLevel>true</getLevel>  <getChildIndex>true</getChildIndex>  <getChildrenCount>true</getChildrenCount>  <getTerm>true</getTerm>  <getClsIdDataType>true</getClsIdDataType>  </pattern>
[![](../../minus.gif)](../../#)<range>
  <start>0</start>  <count>100</count>  </range>
  <filteredCount>true</filteredCount>  </tArg>
  </GetTreeElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTreeElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<els xmlns="****">
[![](../../minus.gif)](../../#)<e i="**0**" hc="**1**" c="**1**" h="**0**" l="**1**">
  <k>3</k>  <n>Куб (элементы)</n>  <id>OBJ183</id>  <p>2</p>  <classId>1287</classId>  <tag>eax.src</tag>  </e>
[![](../../minus.gif)](../../#)<e i="**0**" hc="**1**" c="**2**" h="**2**" l="**4**">
  <k>7</k>  <n>Элементы</n>  <id />
  <p>5</p>  <tag>eax.des</tag>  </e>
[![](../../minus.gif)](../../#)<e i="**0**" hc="**1**" c="**1**" h="**1**" l="**5**">
  <k>13</k>  <n>Первый элемент</n>  <id>1</id>  <p>7</p>  <tag>eax.de</tag>[![](../../minus.gif)](../../#)<term>
[![](../../minus.gif)](../../#)<it>
  <n>tag</n>  <v>eax.de</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>key</n>  <v>116</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>elKey</n>  <v>1</v>  </it>
  </term>
  </e>
[![](../../minus.gif)](../../#)<e i="**0**" hc="**1**" c="**1**" h="**1**" l="**6**">
  <k>15</k>  <n>Второй элемент</n>  <id>2</id>  <p>13</p>  <tag>eax.de</tag>[![](../../minus.gif)](../../#)<term>
[![](../../minus.gif)](../../#)<it>
  <n>tag</n>  <v>eax.de</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>key</n>  <v>116</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>elKey</n>  <v>2</v>  </it>
  </term>
  </e>
[![](../../minus.gif)](../../#)<e i="**0**" hc="**0**" c="**0**" h="**0**" l="**7**">
  <k>16</k>  <n>Третий элемент</n>  <id>3</id>  <p>15</p>  <tag>eax.de</tag>[![](../../minus.gif)](../../#)<term>
[![](../../minus.gif)](../../#)<it>
  <n>tag</n>  <v>eax.de</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>key</n>  <v>116</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>elKey</n>  <v>3</v>  </it>
  </term>
  </e>
[![](../../minus.gif)](../../#)<e i="**1**" hc="**0**" c="**0**" h="**0**" l="**5**">
  <k>14</k>  <n>Четвертый элемент</n>  <id>4</id>  <p>7</p>  <tag>eax.de</tag>[![](../../minus.gif)](../../#)<term>
[![](../../minus.gif)](../../#)<it>
  <n>tag</n>  <v>eax.de</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>key</n>  <v>116</v>  </it>
[![](../../minus.gif)](../../#)<it>
  <n>elKey</n>  <v>4</v>  </it>
  </term>
  </e>
  </els>
  <filteredCount xmlns="****">6</filteredCount>[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!E1!Sheets!189!MtdTree</id>  </id>
  </GetTreeElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTreeElements" :
  {
   "tTree" :
    {
     "id" : "S1!M!S!E1!Sheets!189!MtdTree"
    },
   "tArg" :
    {
     "parent" :
      {
       "key" : ""
      },
     "filter" :
      {
       "text" :
        {
         "text" : "Элемент",
         "searchName" : "true",
         "searchId" : "false"
        },
       "includeParents" : "false"
      },
     "pattern" :
      {
       "getParentKey" : "true",
       "getHasChildren" : "true",
       "getLevel" : "true",
       "getChildIndex" : "true",
       "getChildrenCount" : "true",
       "getTerm" : "true",
       "getClsIdDataType" : "true"
      },
     "range" :
      {
       "start" : "0",
       "count" : "100"
      },
     "filteredCount" : "true"
    }
  }
}

### JSON-ответ:


{
 "GetTreeElementsResult" :
  {
   "els" :
    {
     "e" :
      [
        {
         "@c" : "1",
         "@h" : "0",
         "@i" : "0",
         "@hc" : "1",
         "@l" : "1",
         "k" : "3",
         "n" : "Куб (элементы)",
         "id" : "OBJ183",
         "p" : "2",
         "classId" : "1287",
         "tag" : "eax.src"
        },
        {
         "@c" : "2",
         "@h" : "2",
         "@i" : "0",
         "@hc" : "1",
         "@l" : "4",
         "k" : "7",
         "n" : "Элементы",
         "id" : "",
         "p" : "5",
         "tag" : "eax.des"
        },
        {
         "@c" : "1",
         "@h" : "1",
         "@i" : "0",
         "@hc" : "1",
         "@l" : "5",
         "k" : "13",
         "n" : "Первый элемент",
         "id" : "1",
         "p" : "7",
         "tag" : "eax.de",
         "term" :
          {
           "it" :
            [
              {
               "n" : "tag",
               "v" : "eax.de"
              },
              {
               "n" : "key",
               "v" : "116"
              },
              {
               "n" : "elKey",
               "v" : "1"
              }
            ]
          }
        },
        {
         "@c" : "1",
         "@h" : "1",
         "@i" : "0",
         "@hc" : "1",
         "@l" : "6",
         "k" : "15",
         "n" : "Второй элемент",
         "id" : "2",
         "p" : "13",
         "tag" : "eax.de",
         "term" :
          {
           "it" :
            [
              {
               "n" : "tag",
               "v" : "eax.de"
              },
              {
               "n" : "key",
               "v" : "116"
              },
              {
               "n" : "elKey",
               "v" : "2"
              }
            ]
          }
        },
        {
         "@c" : "0",
         "@h" : "0",
         "@i" : "0",
         "@hc" : "0",
         "@l" : "7",
         "k" : "16",
         "n" : "Третий элемент",
         "id" : "3",
         "p" : "15",
         "tag" : "eax.de",
         "term" :
          {
           "it" :
            [
              {
               "n" : "tag",
               "v" : "eax.de"
              },
              {
               "n" : "key",
               "v" : "116"
              },
              {
               "n" : "elKey",
               "v" : "3"
              }
            ]
          }
        },
        {
         "@c" : "0",
         "@h" : "0",
         "@i" : "1",
         "@hc" : "0",
         "@l" : "5",
         "k" : "14",
         "n" : "Четвертый элемент",
         "id" : "4",
         "p" : "7",
         "tag" : "eax.de",
         "term" :
          {
           "it" :
            [
              {
               "n" : "tag",
               "v" : "eax.de"
              },
              {
               "n" : "key",
               "v" : "116"
              },
              {
               "n" : "elKey",
               "v" : "4"
              }
            ]
          }
        }
      ]
    },
   "filteredCount" : "6",
   "id" :
    {
     "id" : "S1!M!S!E1!Sheets!189!MtdTree"
    }
  }
}


    public static GetTreeElementsResult GetSheetMetadata(EaxId moniker, ulong sheetKey)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tGet = new GetTreeElements()
        {
            tArg = new GetTreeElementsArg()
            {
                parent = new ElKey() { key = "" },
                filter = new TreeElsFilter()
                {
                    includeParents = false,
                    text = new TreeTextFilter()
                    {
                        searchId = false,
                        searchName = true,
                        text = "Элемент"
                    }
                },
                filteredCount = true,
                pattern = new TreeElsPattern()
                {
                    getChildIndex = true,
                    getChildrenCount = true,
                    getClsIdDataType = true,
                    getHasChildren = true,
                    getLevel = true,
                    getParentKey = true,
                    getTerm = true
                },
                range = new ListRange()
                {
                    start = 0,
                    count = 100
                }
            },
            tTree = new TreeId() { id = moniker.id + "!Sheets!" + sheetKey.ToString() + "!MtdTree" }
        };
        //Получение информации
        var result = somClient.GetTreeElements(tGet);
        return result;
    }


См. также:


[Работа
 с экспресс-отчетами](../ExpressReport/ExpressReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
