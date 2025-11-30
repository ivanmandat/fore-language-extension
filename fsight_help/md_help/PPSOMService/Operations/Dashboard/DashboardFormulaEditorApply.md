# DashboardFormulaEditorApply: Операция

DashboardFormulaEditorApply: Операция
-


**


# DashboardFormulaEditorApply


## Синтаксис


bool DashboardFormulaEditorApply(string mon, string
 tArg)


## Параметры


mon. Моникёр
 элемента информационной панели.


tArg. Новое выражение, которое
 необходимо применить.


## Описание


Операция DashboardFormulaEditorApply
 применяет изменения для элемента информационной панели или модели данных,
 который редактируется в редакторе выражений.


## Комментарии


Операция позволяет сохранить SQL-запросы, выражения вычисляемых полей,
 фильтрации в таблице модели данных. Для выполнения операции укажите в
 поле mon моникёр редактируемого
 элемента, а в поле tArg новое
 выражение для элемента.


Моникёр формируется из моникёра открытого экземпляра информационной
 панели или модели данных с добавлением следующих постфиксов:


	- !Sources!Queries!Elements!ключ
	 запроса!Ufe. Для работы с SQL-запросами;


	- !Fields!ключ поля!Ufe.
	 Для работы с вычисляемыми полями;


	- !Ufe. Для настройки
	 фильтрации в таблице модели данных.


Результатом работы операции будет логическое значение true,
 если применение изменений завершилось успешно.


## Пример


Ниже приведён пример изменения текста SQL-запроса в модели данных. В
 запросе передаётся моникёр SQL-запроса, сохранённого в модели данных,
 и новый текст для SQL-запроса. В ответе возвращается признак успешного
 изменения текста SQL-запроса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardFormulaEditorApply xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe</mon>  <tArg xmlns="****">select * from T_LOG_MESSAGES</tArg>  </DashboardFormulaEditorApply>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardFormulaEditorApplyResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardFormulaEditorApplyResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardFormulaEditorApply" :
  {
   "mon" : "JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe",
   "tArg" : "select * from T_LOG_MESSAGES"
  }
}

### JSON-ответ:


{
 "DashboardFormulaEditorApplyResult" : "1"
}


public static bool DashboardFormulaEditorApply(string moniker, uint elementkey, string newFormula)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tApply = new DashboardFormulaEditorApply()
    {
        tArg = newFormula,
        // Моникёр элемента
        mon = moniker + "!Sources!Queries!Elements!" + elementkey + "!Ufe"
    };
    // Применение изменений
    var result = somClient.DashboardFormulaEditorApply(tApply);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
