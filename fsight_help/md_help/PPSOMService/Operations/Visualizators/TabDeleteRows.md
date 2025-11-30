# TabDeleteRows: Операция

TabDeleteRows: Операция
-


**


# TabDeleteRows


## Синтаксис


bool TabDeleteRows(TabSheetId tTabSheet, TabInsertDeleteArg
 tArg)


## Параметры


tTabSheet. Моникёр
 таблицы, в которой удаляются строки.


tArg. Параметры удаления строк.


## Описание


Операция TabDeleteRows удаляет
 строки в таблице.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg
 параметры удаления строк. Моникёр может быть сформирован на основании
 моникёра открытого экземпляра объекта, с таблицей которого осуществляется
 работа, по следующим правилам:


	- «Моникёр экземпляра экспресс-отчета»!Tab.
	 Таблица экспресс-отчета (если в экспресс-отчете один лист).


	- «Моникёр экземпляра экспресс-отчета»!Sheets!«Ключ
	 листа»!Tab. Таблица заданного листа экспресс-отчета (если в
	 экспресс-отчете несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!Tab. Таблица рабочей книги (если в рабочей книге один
	 лист).


	- «Моникёр экземпляра рабочей
	 книги»!Sheets!«Ключ листа»!Tab. Таблица заданного листа рабочей
	 книги (если в рабочей книги несколько листов).


	- «Моникёр экземпляра рабочей
	 книги»!CorrTab. Таблица с матрицей корреляции.


	- «Моникёр экземпляра рабочей
	 книги»!CoeffTab. Таблица с коэффициентами уравнения.


	- «Моникёр экземпляра рабочей
	 книги»!WeightsTab. Таблица с матрицей весов.


	- «Моникёр экземпляра регламентного
	 отчета»!Ключ листа. Таблица отдельного листа регламентного
	 отчета.


Результатом выполнения операции будет логическое значение true,
 если удаление строк завершилась успешно.


## Пример


Ниже приведён пример удаления строк на странице регламентного отчёта.
 В запросе передаётся моникёр страницы и параметры удаления строк. В ответе
 приходит признак удачного удаления.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabDeleteRows xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>S1!M!S!P1!1</id>  </tTabSheet>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <index>5</index>  <count>3</count>  <type>1</type>  </tArg>
  </TabDeleteRows>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabDeleteRowsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabDeleteRowsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabDeleteRows" :
  {
   "tTabSheet" :
    {
     "id" : "S1!M!S!P1!1"
    },
   "tArg" :
    {
     "index" : "5",
     "count" : "3",
     "type" : "1"
    }
  }
}

### JSON-ответ:


{
 "TabDeleteRowsResult" : "1"
}


public static bool DeleteRows(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new TabDeleteRows()
    {
        tArg = new TabInsertDeleteArg()
        {
            index = 5,
            count = 3,
            type = 1
        },
        tTabSheet = new TabSheetId() { id = moniker }
    };
    // Удаление строк
    var result = somClient.TabDeleteRows(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
