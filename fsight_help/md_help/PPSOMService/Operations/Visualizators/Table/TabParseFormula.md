# TabParseFormula: Операция

TabParseFormula: Операция
-


**


# TabParseFormula


## Синтаксис


TabParseFormulaResult TabParseFormula(TabSheetId
 tTabSheet, TabParseFormulaArg tArg)


## Параметры


tTabSheet. Моникёр
 таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция TabParseFormula осуществляет
 разбор формулы.


## Комментарии


Операция позволяет получить диапазоны ячеек, которые используются в
 формуле. Для выполнения операции укажите в поле tTabSheet
 моникёр таблицы, а в поле tArg
 параметры разбора формулы. Моникёр может быть сформирован на основании
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


Результатом работы операции будет коллекция диапазонов ячеек, которые
 используются в формуле.


## Пример


Ниже приведён пример разбора формулы. В запросе передаётся моникёр таблицы
 и формула. В ответе возвращается коллекция диапазонов ячеек, которые используются
 в формуле.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<TabParseFormula xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tTabSheet xmlns="****">
  <id>NCICBNIIFDNNFOAEGDEPHFDNBNHKGLGECJLLNIGNLAMBHPJJ!M!S!PELHGEOIIFDNNFOAEGPBFNFHLMDKLGEBEDKPPGMGEAJCEKLCK!1</id>  </tTabSheet>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <formula>=Sum(A0:B2;C0:D2;D0:E2)</formula>  <coord L="**0**" T="**0**" />
  </tArg>
  </TabParseFormula>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<TabParseFormulaResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<result xmlns="****">
[![](../../../minus.gif)](../../../#)<it>
  <i>0</i>[![](../../../minus.gif)](../../../#)<r>
  <left>0</left>  <top>0</top>  <width>2</width>  <height>3</height>  </r>
  <s>5</s>  <e>10</e>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <i>0</i>[![](../../../minus.gif)](../../../#)<r>
  <left>2</left>  <top>0</top>  <width>2</width>  <height>3</height>  </r>
  <s>11</s>  <e>16</e>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <i>0</i>[![](../../../minus.gif)](../../../#)<r>
  <left>3</left>  <top>0</top>  <width>2</width>  <height>3</height>  </r>
  <s>17</s>  <e>22</e>  </it>
  </result>
  </TabParseFormulaResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "TabParseFormula" :
  {
   "tTabSheet" :
    {
     "id" : "NCICBNIIFDNNFOAEGDEPHFDNBNHKGLGECJLLNIGNLAMBHPJJ!M!S!PELHGEOIIFDNNFOAEGPBFNFHLMDKLGEBEDKPPGMGEAJCEKLCK!1"
    },
   "tArg" :
    {
     "formula" : "=Sum(A0:B2;C0:D2;D0:E2)",
     "coord" :
      {
       "@T" : "0",
       "@L" : "0"
      }
    }
  }
}

### JSON-ответ:


{
 "TabParseFormulaResult" :
  {
   "result" :
    {
     "it" :
      [
        {
         "i" : "0",
         "r" :
          {
           "left" : "0",
           "top" : "0",
           "width" : "2",
           "height" : "3"
          },
         "s" : "5",
         "e" : "10"
        },
        {
         "i" : "0",
         "r" :
          {
           "left" : "2",
           "top" : "0",
           "width" : "2",
           "height" : "3"
          },
         "s" : "11",
         "e" : "16"
        },
        {
         "i" : "0",
         "r" :
          {
           "left" : "3",
           "top" : "0",
           "width" : "2",
           "height" : "3"
          },
         "s" : "17",
         "e" : "22"
        }
      ]
    }
  }
}


public static TabParseFormulaResult ParseFormula(string moniker, string tFormula, TabCoord tCoord)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tPar = new TabParseFormula()
    {
        tArg = new TabParseFormulaArg()
        {
            formula = tFormula,
            coord = tCoord
        },
        tTabSheet = new TabSheetId() { id = moniker }
    };
    // Разбор формулы
    var result = somClient.TabParseFormula(tPar);
    return result;
}


См. также:


[Таблица:
 Операции](tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
