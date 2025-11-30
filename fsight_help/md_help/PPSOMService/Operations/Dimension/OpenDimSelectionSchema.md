# OpenDimSelectionSchema: Операция

OpenDimSelectionSchema: Операция
-


**


# OpenDimSelectionSchema


## Синтаксис


DimSelectionSchemaResult OpenDimSelectionSchema(OdId
 tOb, OpenDimSelectionSchemaArgs tArg)


## Параметры


tOb. Моникёр
 схемы отметки в репозитории.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenDimSelectionSchema
 открывает схему отметки справочника.


## Комментарии


Операция позволяет получить доступ к структуре схемы отметки. Для выполнения
 операции укажите в поле tOb моникёр
 схемы отметки, а в поле tArg
 параметры выполнения операции. Моникёр схемы отметки может быть сформирован
 на основании информации о схеме отметки, полученной среди дочерних объектов
 справочника с помощью операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будет информация о схеме отметки и её примитивах.


## Пример


Ниже приведен пример открытия на редактирование схемы отметки справочника.
 В запросе передается моникёр объекта, являющегося схемой отметки. В ответе
 приходит моникёр открытого экземпляра и описание схемы отметки.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenDimSelectionSchema xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!293564</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <openForEdit>true</openForEdit>[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <od>true</od>  </metaGet>
  </tArg>
  </OpenDimSelectionSchema>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenDimSelectionSchemaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!DSS1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<od ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>OBJ293564</i>  <n>Схема отметки элементов справочника</n>  <k>293564</k>  <c>1030</c>  <p>293441</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </od>
  </meta>
  </OpenDimSelectionSchemaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDimSelectionSchema" :
  {
   "tOb" :
    {
     "id" : "S1!M!293564"
    },
   "tArg" :
    {
     "openForEdit" : "true",
     "metaGet" :
      {
       "obInst" : "true",
       "od" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDimSelectionSchemaResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!DSS1"
    },
   "meta" :
    {
     "od" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "4",
       "@hf" : "0",
       "i" : "OBJ293564",
       "n" : "Схема отметки элементов справочника",
       "k" : "293564",
       "c" : "1030",
       "p" : "293441",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static DimSelectionSchemaResult OpenDimSelectionSchema(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenDimSelectionSchema()
    {
        tOb = new OdId() { id = moniker },
        tArg = new OpenDimSelectionSchemaArgs()
        {
            openForEdit = true,
            metaGet = new DimSelectionSchemaMdPattern()
            {
                od = true
            }
        }
    };
    //Открытие схемы отметки
    var result = somClient.OpenDimSelectionSchema(tOpen);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
