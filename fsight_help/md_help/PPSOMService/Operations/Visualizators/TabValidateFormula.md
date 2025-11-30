# TabValidateFormula: Операция

TabValidateFormula: Операция
-


**


# TabValidateFormula


## Синтаксис


bool TabValidateFormula(TabSheetId tTabSheet, string
 formula)


## Параметры


tTabSheet. Моникёр
 таблицы.


formula. Выражение, которое
 необходимо проверить на возможность использования в условном формате.


## Описание


Операция TabValidateFormula
 проверяет выражение, используемое в условном формате.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле formula
 проверяемое выражение. Моникёр может быть сформирован на основании моникёра
 открытого экземпляра объекта, с таблицей которого осуществляется работа,
 по следующим правилам:


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
 если выражение допустимо для условного формата и false,
 если выражение некорректно.


## Пример


Ниже приведён пример проверки возможности использования выражения в
 условном формате. В запросе передаётся моникёр таблицы и выражение. В
 ответе приходит признак корректности выражения для условного формата.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<TabValidateFormula xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tTabSheet xmlns="****">
  <id>PIHBEDBNELDPFOAEFEDCEMJBFINKCAOEMIHGHJAAHDLLJOHF!M!S!PLFPLFNBNELDPFOAEFCLGLLHBNEKHIFKEJIADGEJBNAOOBCCB!1</id>  </tTabSheet>
  <formula xmlns="****">Value>(A1+B1)*C1</formula>  </TabValidateFormula>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <TabValidateFormulaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabValidateFormulaResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabValidateFormula" :
  {
   "tTabSheet" :
    {
     "id" : "PIHBEDBNELDPFOAEFEDCEMJBFINKCAOEMIHGHJAAHDLLJOHF!M!S!PLFPLFNBNELDPFOAEFCLGLLHBNEKHIFKEJIADGEJBNAOOBCCB!1"
    },
   "formula" : "Value>(A1+B1)*C1"
  }
}

### JSON-ответ:


{
 "TabValidateFormulaResult" : "1"
}


public static bool ValidateFormula(string moniker, string formula)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tVal = new TabValidateFormula()
    {
        formula = formula,
        tTabSheet = new TabSheetId() { id = moniker }
    };
    // Проверка формата
    var result = somClient.TabValidateFormula(tVal);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
