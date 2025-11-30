# DebugAlg: Операция

DebugAlg: Операция
-


**


# DebugAlg


## Синтаксис


DebugAlgResult DebugAlg(AlgId tAlg, DebugAlgArg
 tArg)


## Параметры


tAlg. Моникёр
 открытого экземпляра алгоритма расчёта показателей.


tArg. Параметры выполнения
 операции.


## Описание


Операция DebugAlg запускает
 расчёт алгоритма в режиме отладки.


## Комментарии


Операция позволяет запускать, приостанавливать и продолжать расчёт в
 нужный момент времени. Также в любой момент времени можно получить актуальную
 информацию о процессе расчёта.


Для выполнения операции задайте в поле tAlg
 моникёр открытого экземпляра алгоритма расчёта, а в поле tArg
 параметры выполнения операции. Моникёр может быть получен при выполнении
 операции [OpenAlg](OpenAlg.htm).


Результатом операции будет информация об успешности или возможных ошибках
 выполнения расчёта, а также общее время, затраченное на расчёт.


## Пример


Ниже приведён пример запуска вычисления алгоритма расчёта показателей
 в режиме отладки. В запросе передаётся моникёр открытого экземпляра алгоритма
 расчёта. В ответе приходит информация о текущем статусе выполнения.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<DebugAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C1</id>  </tAlg>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <command>Start</command>  <state>true</state>  </tArg>
  </DebugAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<DebugAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<state xmlns="****">
  <calculationState>Initialization</calculationState>  <needUpdateStyles>1</needUpdateStyles>  </state>
  </DebugAlgResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DebugAlg" :
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
 "DebugAlgResult" :
  {
   "state" :
    {
     "calculationState" : "Initialization",
     "needUpdateStyles" : "1"
    }
  }
}


public static DebugAlgResult DebugAlg(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tCalc = new DebugAlg()
    {
        tAlg = new AlgId() { id = moniker },
        tArg = new DebugAlgArg()
        {
            command = AlgDebugCommand.Start,
            state = true
        }
    };
    //Выполнение алгоритма расчёта показателей в режиме отладки
    var result = somClient.DebugAlg(tCalc);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
