# OpenDbCommand: Операция

OpenDbCommand: Операция
-


**


# OpenDbCommand


## Синтаксис


OpenDbCommandResult OpenDbCommand(OdId tOb, OpenDbCommandArg
 tArg)


## Параметры


tOb. Моникёр
 SQL-объекта репозитория.


tArg.
 Параметры открытия.


## Описание


Операция OpenDbCommand открывает
 SQL-объект и возвращает контекст для работы с ним.


## Комментарии


Для выполнения операции необходимо в поле tObject
 указать моникёр SQL-объекта репозитория, а в поле tArg
 указать параметры открытия. Под SQL-объектом понимается один из следующих
 типов объектов репозитория:


	- [Запрос](UiNavObj.chm::/Query/query.htm);


	- [Команда
	 СУБД](UiNavObj.chm::/CUBD/UiDb_relationa_CUBD.htm);


	- [Процедура](UiNavObj.chm::/procedure/UiDb_relationa_procedure.htm).


Моникёр объекта может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm). В поле
 tArg могут быть указаны режим
 открытия (просмотр или редактирование), значения параметров, которые будут
 переданы в запрос, и шаблон для извлечения метаданных. В шаблоне указывается
 та информация, которая должна быть получена при выполнении операции. Результатом
 работы операции будет моникёр открытого экземпляра SQL-объекта, а также
 метаданные, полученнные в соответствии с указанным в поле tArg.metaGet
 шаблоном. Дальнейшая работа с открытым объектом осуществляется с помощью
 операций [GetDbCommand](GetDbCommand.htm)
 и SetDbCommand. Для закрытия открытого
 экземпляра SQL-объекта используйте операцию [CloseDbCommand](CloseDbCommand.htm).


## Пример


Пример открытия SQL-объекта на редактирование. В запросе передается
 моникёр SQL-объекта в репозитории. В ответе приходит моникёр открытого
 экземпляра SQL-объекта.


В примере для C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenDbCommand xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!9051</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenDbCommand>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenDbCommandResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO</id>  </id>
  </OpenDbCommandResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenDbCommand" :
  {
   "tOb" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!9051"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenDbCommandResult" :
  {
   "id" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO"
    }
  }
}


public static OpenDbCommandResult OpenSQLObject(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenDbCommand()
    {
        tArg = new OpenDbCommandArg()
        {
            args = new DbCommandOpenArgs()
            {
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие SQL-объекта
    var tResult = somClient.OpenDbCommand(tOpen);
    return tResult;
}


См. также:


[Работа
 с SQL-объектами репозитория](Relational_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
