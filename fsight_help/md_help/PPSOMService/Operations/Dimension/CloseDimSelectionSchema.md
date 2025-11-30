# CloseDimSelectionSchema: Операция

CloseDimSelectionSchema: Операция
-


**


# CloseDimSelectionSchema


## Синтаксис


bool CloseDimSelectionSchema(OdId tOb)


## Параметры


tOb. Моникёр
 открытого экземпляра схемы отметки.


## Описание


Операция CloseDimSelectionSchema
 закрытия экземпляра схемы отметки.


## Комментарии


Для выполнения операции укажите в поле tOb
 моникёр экземпляра схемы отметки, который необходимо закрыть. Результатом
 операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра схемы отметки справочника.
 В запросе передается моникёр схемы отметки. В ответе приходит признак
 удачного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseDimSelectionSchema xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!DSS1</id>  </tOb>
  </CloseDimSelectionSchema>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseDimSelectionSchemaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseDimSelectionSchemaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseDimSelectionSchema" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!DSS1"
    }
  }
}

### JSON-ответ:


{
 "CloseDimSelectionSchemaResult" : "1"
}


public static bool CloseSelectionSchema(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseDimSelectionSchema()
    {
        tOb = new OdId() { id = moniker },
    };
    //Закрытие схемы отметки
    var result = somClient.CloseDimSelectionSchema(tClose);
    return result;
}


См. также:


[Работа
 со справочниками](Dimension_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
