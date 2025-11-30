# GetDimSelectionSchema: Операция

GetDimSelectionSchema: Операция
-


**


# GetDimSelectionSchema


## Синтаксис


DimSelectionSchemaResult GetDimSelectionSchema(OdId
 tOb, GetDimSelectionSchemaArgs tArg)


## Параметры


tOb. Моникёр
 открытого экземпляра схемы отметки.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDimSelectionSchema
 получает метаданные схемы отметки.


## Комментарии


Операция позволяет получить описание схемы отметки и информацию о примитивах
 схемы отметки.


Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра схемы отметки, а в поле tArg
 параметры выполнения операции. Моникёр может быть получен при выполнении
 операции [OpenDimSelectionSchema](OpenDimSelectionSchema.htm).


Результатом операции будет запрошенная информация.


## Пример


Ниже приведён пример получения информации о примитивах схемы отметки.
 В запросе передаётся моникёр открытого экземпляра схемы отметки и шаблон,
 который определяет, какие именно метаданные необходимо извлечь. В ответе
 приходит полученная информация.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDimSelectionSchema xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!DSS1</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <primitives>Get</primitives>  </pattern>
  </tArg>
  </GetDimSelectionSchema>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDimSelectionSchemaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DSS1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<primitives>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <selectionType>Specified</selectionType>  <deselect>0</deselect>[![](../../minus.gif)](../../#)<selectedElems>
  <it>0</it>  <it>1</it>  <it>2</it>  </selectedElems>
[![](../../minus.gif)](../../#)<selId>
  <id>S1!M!S!DSS2</id>  </selId>
  </it>
  </its>
  </primitives>
  </meta>
  </GetDimSelectionSchemaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDimSelectionSchema" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!DSS1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "primitives" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDimSelectionSchemaResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DSS1"
    },
   "meta" :
    {
     "primitives" :
      {
       "its" :
        {
         "it" :
          [
            {
             "selectionType" : "Specified",
             "deselect" : "0",
             "selectedElems" :
              {
               "it" :
                [
                  "0",
                  "1",
                  "2"
                ]
              },
             "selId" :
              {
               "id" : "S1!M!S!DSS2"
              }
            }
          ]
        }
      }
    }
  }
}


public static DimSelectionSchemaResult GetPrimitives(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDimSelectionSchema()
    {
        tOb = new OdId() { id = moniker },
        tArg = new GetDimSelectionSchemaArgs()
        {
            pattern = new DimSelectionSchemaMdPattern()
            {
                primitives = ListOperation.Get
            }
        }
    };
    //Получение списка примитивов схемы отметки
    var result = somClient.GetDimSelectionSchema(tGet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
