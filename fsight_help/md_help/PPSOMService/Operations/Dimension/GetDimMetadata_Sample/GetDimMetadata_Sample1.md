# Получение информации о дочерних объектах справочника: Операция GetDimMetadata

Получение информации о дочерних объектах справочника: Операция GetDimMetadata
-


**


# Получение информации о дочерних объектах справочника


Ниже приведен пример использования операции [GetDimMetadata](../GetDimMetadata.htm)
 для получения информации о дочерних объектах справочника. В запросе передается
 моникёр справочника и шаблон, в котором указывается необходимость получить
 информацию о схемах отметки, группах элементов и альтернативных иерархиях
 справочника. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDimMetadata xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDim xmlns="****">
  <id>S1!M!S!S1</id>  </tDim>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>false</obInst>  <getHiers>true</getHiers>  <getGroups>true</getGroups>  <getSchemas>true</getSchemas>  </pattern>
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
[![](../../../minus.gif)](../../../#)<hiers>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>SOURCE1</id>  <n>Dim_1 (En)</n>  <vis>1</vis>  <sourceDimKey>154</sourceDimKey>  <originalDimKey>116</originalDimKey>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>SOURCE2</id>  <n>ХЗ2</n>  <vis>1</vis>  <sourceDimKey>51924</sourceDimKey>  <originalDimKey>116</originalDimKey>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>3</k>  <id>SOURCE3</id>  <n>Dim_1 (альтернатива)</n>  <vis>1</vis>  <sourceDimKey>105777</sourceDimKey>  <originalDimKey>116</originalDimKey>  </it>
  </hiers>
[![](../../../minus.gif)](../../../#)<groups>
[![](../../../minus.gif)](../../../#)<it>
  <k>157</k>  <id>GROUP1</id>  <n>Группа элементов (по списку)</n>  <vis>0</vis>  </it>
  </groups>
[![](../../../minus.gif)](../../../#)<schemas>
[![](../../../minus.gif)](../../../#)<it>
  <k>158</k>  <id>SCHEME1</id>  <n>Схема отметки (по списку)</n>  <vis>0</vis>  </it>
  </schemas>
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
       "getHiers" : "true",
       "getGroups" : "true",
       "getSchemas" : "true"
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
     "hiers" :
      {
       "it" :
        [
          {
           "k" : "1",
           "id" : "SOURCE1",
           "n" : "Dim_1 (En)",
           "vis" : "1",
           "sourceDimKey" : "154",
           "originalDimKey" : "116"
          },
          {
           "k" : "2",
           "id" : "SOURCE2",
           "n" : "ХЗ2",
           "vis" : "1",
           "sourceDimKey" : "51924",
           "originalDimKey" : "116"
          },
          {
           "k" : "3",
           "id" : "SOURCE3",
           "n" : "Dim_1 (альтернатива)",
           "vis" : "1",
           "sourceDimKey" : "105777",
           "originalDimKey" : "116"
          }
        ]
      },
     "groups" :
      {
       "it" :
        {
         "k" : "157",
         "id" : "GROUP1",
         "n" : "Группа элементов (по списку)",
         "vis" : "0"
        }
      },
     "schemas" :
      {
       "it" :
        {
         "k" : "158",
         "id" : "SCHEME1",
         "n" : "Схема отметки (по списку)",
         "vis" : "0"
        }
      },
     "isAbacSecured" : "0"
    }
  }
}


public static GetDimMetadataResult GetChildrenObjectInfo(DmId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tMeta = new GetDimMetadata()
    {
        tArg = new GetDimMetadataArg()
        {
            pattern = new DmMetadataPattern()
            {
                getGroups = true,
                getHiers = true,
                getSchemas = true,
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
