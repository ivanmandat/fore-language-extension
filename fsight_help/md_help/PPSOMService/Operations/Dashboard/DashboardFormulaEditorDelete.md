# DashboardFormulaEditorDelete: Операция

DashboardFormulaEditorDelete: Операция
-


**


# DashboardFormulaEditorDelete


## Синтаксис


bool DashboardFormulaEditorDelete(string mon)


## Параметры


mon. Моникёр
 элемента информационной панели.


## Описание


Операция DashboardFormulaEditorDelete
 удаляет выражение для элемента информационной панели или модели данных,
 который редактируется в редакторе выражений.


## Комментарии


Операция позволяет удалить SQL-запросы, выражения вычисляемых полей,
 фильтрации в таблице модели данных. Для выполнения операции укажите в
 поле mon моникёр редактируемого
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
 если удаление выражения завершилось успешно.


## Пример


Ниже приведён пример удаления текста SQL-запроса в модели данных. В
 запросе передаётся моникёр SQL-запроса, сохранённого в модели данных.
 В ответе возвращается признак успешного удаления текста SQL-запроса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardFormulaEditorDelete xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe</mon>  </DashboardFormulaEditorDelete>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardFormulaEditorDeleteResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</DashboardFormulaEditorDeleteResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardFormulaEditorDelete" :
  {
   "mon" : "JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe"
  }
}

### JSON-ответ:


{
 "DashboardFormulaEditorDeleteResult" : "1"
}


public static bool DashboardFormulaEditorDelete(string moniker, uint elementkey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tDel = new DashboardFormulaEditorDelete()
    {
        // Моникёр элемента
        mon = moniker + "!Sources!Queries!Elements!" + elementkey + "!Ufe"
    };
    // Удаление выражения
    var result = somClient.DashboardFormulaEditorDelete(tDel);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
