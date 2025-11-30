# DashboardFormulaEditorRollback: Операция

DashboardFormulaEditorRollback: Операция
-


**


# DashboardFormulaEditorRollback


## Синтаксис


bool DashboardFormulaEditorRollback(string mon)


## Параметры


mon. Моникёр
 элемента информационной панели.


## Описание


Операция DashboardFormulaEditorRollback
 отменяет изменения, внесённые в выражение элемента информационной панели
 или модели данных.


## Комментарии


Операция позволяет отменить изменение SQL-запросов, выражений вычисляемых
 полей, фильтрации в таблице модели данных. Для выполнения операции укажите
 в поле mon моникёр редактируемого
 элемента.


Моникёр формируется из моникёра открытого экземпляра информационной
 панели или модели данных с добавлением следующих постфиксов:


	- !Sources!Queries!Elements!ключ
	 запроса!Ufe. Для работы с SQL-запросами;


	- !Fields!ключ поля!Ufe.
	 Для работы с вычисляемыми полями;


	- !Ufe. Для настройки
	 фильтрации в таблице модели данных.


Результатом работы операции будет логическое значение true,
 если отмена изменений завершилась успешно.


## Пример


Ниже приведён пример отмены изменений, внесённых в SQL-запрос модели
 данных. В запросе передаётся моникёр SQL-запроса, сохранённого в модели
 данных. В ответе возвращается признак успешной отмены изменений.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardFormulaEditorRollback xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe</mon>  </DashboardFormulaEditorRollback>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardFormulaEditorRollbackResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardFormulaEditorRollbackResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardFormulaEditorRollback" :
  {
   "mon" : "JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe"
  }
}

### JSON-ответ:


{
 "DashboardFormulaEditorRollbackResult" : "1"
}


public static bool DashboardFormulaEditorRollback(string moniker, uint elementkey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tRollback = new DashboardFormulaEditorRollback()
    {
        // Моникёр элемента
        mon = moniker + "!Sources!Queries!Elements!" + elementkey + "!Ufe"
    };
    // Откат изменений
    var result = somClient.DashboardFormulaEditorRollback(tRollback);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
