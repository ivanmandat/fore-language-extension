# DashboardFormulaEditorEdit: Операция

DashboardFormulaEditorEdit: Операция
-


**


# DashboardFormulaEditorEdit


## Синтаксис


string DashboardFormulaEditorEdit(string mon)


## Параметры


mon. Моникёр
 элемента информационной панели.


## Описание


Операция DashboardFormulaEditorEdit
 открывает на редактирование в редакторе выражений элемент информационной
 панели или модели данных.


## Комментарии


Операция позволяет начать редактирование SQL-запросов, выражений вычисляемых
 полей, фильтрации в таблице модели данных. Для выполнения операции укажите
 в поле mon моникёр элемента,
 который необходимо отредактировать.


Моникёр формируется из моникёра открытого экземпляра информационной
 панели или модели данных с добавлением следующих постфиксов:


	- !Sources!Queries!Elements!ключ
	 запроса!Ufe. Для работы с SQL-запросами;


	- !Fields!ключ поля!Ufe.
	 Для работы с вычисляемыми полями;


	- !Ufe. Для настройки
	 фильтрации в таблице модели данных.


Результатом работы операции будет выражение, которое необходимо отредактировать.


## Пример


Ниже приведён пример редактирования SQL-запроса в модели данных. В запросе
 передаётся моникёр SQL-запроса, сохранённого в модели данных. В ответе
 возвращается текущий текст SQL-запроса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DashboardFormulaEditorEdit xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe</mon>  </DashboardFormulaEditorEdit>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <DashboardFormulaEditorEditResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">select * from t_log</DashboardFormulaEditorEditResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DashboardFormulaEditorEdit" :
  {
   "mon" : "JGFBABFGGBCDGOAEBMHDIAHPJIKJBODEGIEMDGCEMLPABPHA!M!S!PAKKBPCFGGBCDGOAEPJJNAKJDEPCJOIOEJLMIGOFHBOBCOFGO!Sources!Queries!Elements!1!Ufe"
  }
}

### JSON-ответ:


{
 "DashboardFormulaEditorEditResult" : "select * from t_log"
}


public static string DashboardFormulaEditorEdit(string moniker, uint elementkey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tEdit = new DashboardFormulaEditorEdit()
    {
        // Моникёр элемента
        mon = moniker + "!Sources!Queries!Elements!" + elementkey + "!Ufe"
    };
    // Редактирование выражения
    var result = somClient.DashboardFormulaEditorEdit(tEdit);
    return result;
}


См. также:


[Работа
 с информационными панелями](DashboardOperations.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
