# CalcAlg: Операция

CalcAlg: Операция
-


**


# CalcAlg


## Синтаксис


CalcAlgResult CalcAlg(AlgId tAlg, ArgType tArg)


## Параметры


tAlg. Моникёр
 открытого экземпляра алгоритма расчёта показателей.


tArg. Параметры выполнения
 операции.


## Описание


Операция CalcAlg вычисляет алгоритм
 расчёта показателей.


## Комментарии


Для выполнения операции задайте в поле tAlg
 моникёр открытого экземпляра алгоритма расчёта, а в поле tArg
 параметры выполнения операции. Моникёр может быть получен при выполнении
 операции [OpenAlg](OpenAlg.htm).


Результатом выполнения операции будет информация об успешности или возможных
 ошибках выполнения расчёта, а также общее время, затраченное на расчёт.


## Пример


Ниже приведён пример запуска вычисления алгоритма расчёта показателей.
 В запросе передаётся моникёр открытого экземпляра алгоритма расчёта. В
 ответе приходит информация о результатах вычисления.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CalcAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C1</id>  </tAlg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <command>Start</command>  <state>true</state>  </tArg>
  </CalcAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CalcAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<state xmlns="****">
  <calculationState>Running</calculationState>  <needUpdateStyles>1</needUpdateStyles>  </state>
  </CalcAlgResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CalcAlg" :
  {
   "tAlg" :
    {
     "id" : "S1!M!S!C1"
    },
   "tArg" :
    {
     "command" : "Start",
     "state" : "true"
    }
  }
}

### JSON-ответ:


{
 "CalcAlgResult" :
  {
   "state" :
    {
     "calculationState" : "Running",
     "needUpdateStyles" : "1"
    }
  }
}


public static CalcAlgResult CalcAlg(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tCalc = new CalcAlg()
    {
        tAlg = new AlgId() { id = moniker },
        tArg = new CalcAlgArg()
        {
            command = AlgCalcCommand.Start,
            state = true
        }
    };
    //Выполнение алгоритма расчёта показателей
    var result = somClient.CalcAlg(tCalc);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
