# CalculateFormula: Операция

CalculateFormula: Операция
-


**


# CalculateFormula


## Синтаксис


TabFormulaResult CalculateFormula(TabSheetId tTabSheet,
 CalculateFormulaArgs tArg)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция CalculateFormula вычисляет
 промежуточное значение формулы.


## Комментарии


Операция позволяет получить промежуточное значение части формулы или
 всей формулы, заданной в ячейке таблицы. Для выполнения операции укажите
 в поле tTabSheet моникёр таблицы,
 в поле tArg.coord координаты
 ячейки с полной формулой, а в поле tArg.formula
 ту часть формулы, для которой необходимо получить промежуточное значение.
 Моникёр может быть сформирован на основании моникёра открытого экземпляра
 объекта, с таблицей которого осуществляется работа, по следующим правилам:


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


Результатом выполнения операции будет вычисленное промежуточное значение
 формулы.


## Пример


Ниже приведён пример вычисления промежуточного значения части формулы,
 хранящейся в ячейке. В запросе передаётся моникёр таблицы. координаты
 ячейки с формулой и часть формулы, для которой необходимо вычислить промежуточное
 значение. В ответе возвращается вычисленное значение.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<CalculateFormula xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>HMDIIGPEOICFGOAEIIBIJLBDNGDMPMJELIMFOFPJFGIMCDLL!M!S!PLCLHEHPEOICFGOAEEIHIMLBLEJPGMEKEIKBLBOPFDDLPIDKF!Sheets!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <formula>B0+C0</formula>  <coord L="**5**" T="**0**" />
  </tArg>
  </CalculateFormula>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<CalculateFormulaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <vt xmlns="****">3</vt>  <v xmlns="****">5</v>  <err xmlns="****">0</err>  </CalculateFormulaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CalculateFormula" :
  {
   "tTabSheet" :
    {
     "id" : "HMDIIGPEOICFGOAEIIBIJLBDNGDMPMJELIMFOFPJFGIMCDLL!M!S!PLCLHEHPEOICFGOAEEIHIMLBLEJPGMEKEIKBLBOPFDDLPIDKF!Sheets!1"
    },
   "tArg" :
    {
     "formula" : "B0+C0",
     "coord" :
      {
       "@T" : "0",
       "@L" : "5"
      }
    }
  }
}

### JSON-ответ:


{
 "CalculateFormulaResult" :
  {
   "vt" : "3",
   "v" : "5",
   "err" : "0"
  }
}


public static TabFormulaResult CalculateFormula(string moniker, string sheetKey, TabCoord cellCoord, string subFormula)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCalc = new CalculateFormula()
    {
        tArg = new CalculateFormulaArgs()
        {
            coord = cellCoord,
            formula = subFormula
        },
        tTabSheet = new TabSheetId() { id = moniker + "!Sheets!" + sheetKey }
    };
    // Вычисление промежуточного значения формулы
    var result = somClient.CalculateFormula(tCalc);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
