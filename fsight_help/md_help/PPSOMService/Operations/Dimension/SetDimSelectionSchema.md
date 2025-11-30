# SetDimSelectionSchema: Операция

SetDimSelectionSchema: Операция
-


**


# SetDimSelectionSchema


## Синтаксис


DimSelectionSchemaResult SetDimSelectionSchema(OdId
 tOb, SetDimSelectionSchemaArgs tArg)


## Параметры


tOb. Моникёр
 открытого экземпляра схемы отметки.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetDimSelectionSchema
 изменяет метаданные схемы отметки.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра схемы отметки, а в поле tArg
 параметры выполнения операции. В поле tArg.pattern
 указывается шаблон, в соответствии с которым осуществляется изменение
 схемы отметки, а в поле tArg.meta
 обновлённые метаданные. Моникёр может быть получен при выполнении операции
 [OpenDimSelectionSchema](OpenDimSelectionSchema.htm). Для настройки
 отметки примитивов используется операция [ChangeDimSelection](ChangeDimSelection.htm).
 Для сохранения изменений используйте операцию [SaveObject](../Repository/SaveObject.htm).


Результатом операции будут обновлённые метаданные схемы отметки, если
 было определено поле tArg.metaGet.


## Пример


Ниже приведён пример добавления нового примитива для схемы отметки.
 В запросе передаётся экземпляр схемы отметки, шаблон, указывающий необходимость
 добавления примитива и обновлённые метаданные, содержащие настройки нового
 примитива. В ответе приходит обновлённый список всех примитивов схемы
 отметки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetDimSelectionSchema xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!DSS1</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <primitives>Add</primitives>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<primitives>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <selectionType>All</selectionType>  </it>
  </its>
  </primitives>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <primitives>Get</primitives>  </metaGet>
  </tArg>
  </SetDimSelectionSchema>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetDimSelectionSchemaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DSS1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<primitives>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <selectionType>Specified</selectionType>  <deselect>0</deselect>[![](../../minus.gif)](../../#)<selectedElems>
  <it>0</it>  <it>1</it>  <it>2</it>  </selectedElems>
[![](../../minus.gif)](../../#)<selId>
  <id>S1!M!S!DSS3</id>  </selId>
  </it>
[![](../../minus.gif)](../../#)<it>
  <selectionType>All</selectionType>  <deselect>0</deselect>  <selectedElems />
  </it>
  </its>
  </primitives>
  </meta>
  </SetDimSelectionSchemaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetDimSelectionSchema" :
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
       "primitives" : "Add"
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
               "selectionType" : "All"
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "primitives" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetDimSelectionSchemaResult" :
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
               "id" : "S1!M!S!DSS3"
              }
            },
            {
             "selectionType" : "All",
             "deselect" : "0",
             "selectedElems" : ""
            }
          ]
        }
      }
    }
  }
}


public static DimSelectionSchemaResult AddPrimitive(string moniker, DimSelectionSchemaPrimitive primitive)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetDimSelectionSchema()
    {
        tOb = new OdId() { id = moniker },
        tArg = new SetDimSelectionSchemaArgs()
        {
            pattern = new DimSelectionSchemaMdPattern()
            {
                primitives = ListOperation.Add
            },
            meta = new DimSelectionSchemaMd()
            {
                primitives = new DimSelectionSchemaPrimitives()
                {
                    its = new DimSelectionSchemaPrimitive[1]
                    {
                        primitive
                    }
                }
            },
            metaGet = new DimSelectionSchemaMdPattern()
            {
                primitives = ListOperation.Get
            }
        }
    };
    //Изменение настроек примитива
    var result = somClient.SetDimSelectionSchema(tSet);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
