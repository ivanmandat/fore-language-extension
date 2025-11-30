# TabValidateFormulaArgument: Операция

TabValidateFormulaArgument: Операция
-


**


# TabValidateFormulaArgument


## Синтаксис


bool TabValidateFormulaArgument(TabSheetId tTabSheet,
 string arg)


## Параметры


tTabSheet. Моникёр
 таблицы.


arg. Список аргументов, которой
 необходимо проверить на возможность использования в функциях.


## Описание


Операция TabValidateFormulaArgument
 проверяет аргументы, используемые в функциях.


## Комментарии


Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле arg
 проверяемый список аргументов. Моникёр может быть сформирован на основании
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
 если аргументы доступны для использования в функциях и false,
 если список аргументов некорректен.


## Пример


Ниже приведён пример проверки аргументов, которые могут быть переданы
 в функции. В запросе передаётся моникёр таблицы и список аргументов. В
 ответе возвращается признак возможности использования аргументов в функциях.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<TabValidateFormulaArgument xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>PIHBEDBNELDPFOAEFEDCEMJBFINKCAOEMIHGHJAAHDLLJOHF!M!S!PLFPLFNBNELDPFOAEFCLGLLHBNEKHIFKEJIADGEJBNAOOBCCB!1</id>  </tTabSheet>
  <arg xmlns="****">A0:A5</arg>  </TabValidateFormulaArgument>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <TabValidateFormulaArgumentResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</TabValidateFormulaArgumentResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabValidateFormulaArgument" :
  {
   "tTabSheet" :
    {
     "id" : "PIHBEDBNELDPFOAEFEDCEMJBFINKCAOEMIHGHJAAHDLLJOHF!M!S!PLFPLFNBNELDPFOAEFCLGLLHBNEKHIFKEJIADGEJBNAOOBCCB!1"
    },
   "arg" : "A0:A5"
  }
}

### JSON-ответ:


{
 "TabValidateFormulaArgumentResult" : "1"
}


public static bool ValidateArgument(string moniker, string arguments)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tVal = new TabValidateFormulaArgument()
    {
        arg = arguments,
        tTabSheet = new TabSheetId() { id = moniker }
    };
    // Проверка аргументов
    var result = somClient.TabValidateFormulaArgument(tVal);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
