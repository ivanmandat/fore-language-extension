# Получение информации о структуре справочника: Операция GetDimMetadata

Получение информации о структуре справочника: Операция GetDimMetadata
-


**


# Получение информации о структуре справочника


Ниже приведен пример использования операции [GetDimMetadata](../GetDimMetadata.htm)
 для получения информации о структуре справочника репозитория. В запросе
 передается моникёр справочника и шаблон, который определяет, какие именно
 данные необходимо извлечь. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimMetadata xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <getDescr>true</getDescr>  <getAttrs>true</getAttrs>  <getLevs>true</getLevs>  <getCompound>true</getCompound>  </pattern>
  </tArg>
  </GetDimMetadata>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDimMetadataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!S1</id>  </id>
[![](../../../minus.gif)](../../../#)<data xmlns="****">
[![](../../../minus.gif)](../../../#)<descr>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<cls>
  <k>1025</k>  </cls>
  </descr>
[![](../../../minus.gif)](../../../#)<attrs>
[![](../../../minus.gif)](../../../#)<it>
  <k>117</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <predefined>Name</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>118</k>  <id>ID</id>  <n>Идентификатор</n>  <vis>1</vis>  <dt>2</dt>  <uniqueIndex>INDEX1</uniqueIndex>  <predefined>Ident</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>119</k>  <id>ORDER</id>  <n>Порядок</n>  <vis>1</vis>  <dt>2</dt>  <predefined>Order</predefined>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>122</k>  <id>PARENT</id>  <n>Родитель</n>  <vis>1</vis>  <dt>2</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>177</k>  <id>CODE</id>  <n>Код</n>  <vis>1</vis>  <dt>1</dt>  <dataDomain>0</dataDomain>  <nullable>1</nullable>  <hasHierarchy>0</hasHierarchy>  </it>
  <ident>1</ident>  <name>0</name>  <order>2</order>  </attrs>
[![](../../../minus.gif)](../../../#)<levs>
[![](../../../minus.gif)](../../../#)<it>
  <k>150</k>  <id>LEVEL1</id>  <n>Уровень 1</n>  <vis>1</vis>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>151</k>  <id>LEVEL2</id>  <n>Уровень 2</n>  <vis>1</vis>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>152</k>  <n>Уровень 2</n>  <vis>0</vis>  </it>
  </levs>
[![](../../../minus.gif)](../../../#)<selection>
  <selectedCount>-1</selectedCount>[![](../../../minus.gif)](../../../#)<compound>
  <k>4294967295</k>  </compound>
  </selection>
  <isAbacSecured>0</isAbacSecured>  </data>
  </GetDimMetadataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDimMetadata" :
  {
   "tDim" :
    {
     "id" : "S1!M!S!S1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "false",
       "getDescr" : "true",
       "getAttrs" : "true",
       "getLevs" : "true",
       "getCompound" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDimMetadataResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!S1"
    },
   "data" :
    {
     "descr" :
      {
       "k" : "116",
       "id" : "DIM_1",
       "n" : "Dim_1",
       "vis" : "1",
       "cls" :
        {
         "k" : "1025"
        }
      },
     "attrs" :
      {
       "it" :
        [
          {
           "k" : "117",
           "id" : "NAME",
           "n" : "Наименование",
           "vis" : "1",
           "dt" : "1",
           "predefined" : "Name",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "118",
           "id" : "ID",
           "n" : "Идентификатор",
           "vis" : "1",
           "dt" : "2",
           "uniqueIndex" : "INDEX1",
           "predefined" : "Ident",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "119",
           "id" : "ORDER",
           "n" : "Порядок",
           "vis" : "1",
           "dt" : "2",
           "predefined" : "Order",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "122",
           "id" : "PARENT",
           "n" : "Родитель",
           "vis" : "1",
           "dt" : "2",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          },
          {
           "k" : "177",
           "id" : "CODE",
           "n" : "Код",
           "vis" : "1",
           "dt" : "1",
           "dataDomain" : "0",
           "nullable" : "1",
           "hasHierarchy" : "0"
          }
        ],
       "ident" : "1",
       "name" : "0",
       "order" : "2"
      },
     "levs" :
      {
       "it" :
        [
          {
           "k" : "150",
           "id" : "LEVEL1",
           "n" : "Уровень 1",
           "vis" : "1"
          },
          {
           "k" : "151",
           "id" : "LEVEL2",
           "n" : "Уровень 2",
           "vis" : "1"
          },
          {
           "k" : "152",
           "n" : "Уровень 2",
           "vis" : "0"
          }
        ]
      },
     "selection" :
      {
       "selectedCount" : "-1",
       "compound" :
        {
         "k" : "4294967295"
        }
      },
     "isAbacSecured" : "0"
    }
  }
}


public static GetDimMetadataResult GetDictInfo(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMeta = new GetDimMetadata()
    {
        tArg = new GetDimMetadataArg()
        {
            pattern = new DmMetadataPattern()
            {
                getAttrs = true,
                getIndexes = true,
                getLevs = true,
                getCompound = true,
                getDescr = true,
                obInst = false
            }
        },
        tDim = moniker
    };
    //Получение информации о структуре справочника
    var result = somClient.GetDimMetadata(tMeta);
    return result;
}


См. также:


[GetDimMetadata:
 Операция](../GetDimMetadata.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
