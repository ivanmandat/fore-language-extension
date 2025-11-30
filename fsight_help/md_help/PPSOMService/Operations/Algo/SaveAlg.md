# SaveAlg: Операция

SaveAlg: Операция
-


**


# SaveAlg


## Синтаксис


bool SaveAlg(AlgId tAlg)


## Параметры


tAlg. Моникёр
 открытого экземпляра алгоритма расчёта показателей.


## Описание


Операция SaveAlg сохраняет экземпляр
 алгоритма расчёта показателей.


## Комментарии


Операция вызывается для экземпляра алгоритма расчёта, открытого на редактирования,
 после внесения всех необходимых изменений. Для выполнения операции задайте
 в поле tAlg моникёр открытого
 экземпляра алгоритма расчёта. Моникёр может быть получен при выполнении
 операции [OpenAlg](OpenAlg.htm).


Результатом операции будет логическое значение true,
 если сохранение алгоритма расчёта завершилось успешно.


## Пример


Ниже приведён пример сохранения алгоритма расчёта. В запросе передаётся
 моникёр открытого экземпляра алгоритма расчёта. В ответе приходит признак
 удачного сохранения.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C1</id>  </tAlg>
  </SaveAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SaveAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SaveAlgResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveAlg" :
  {
   "tAlg" :
    {
     "id" : "S1!M!S!C1"
    }
  }
}

### JSON-ответ:


{
 "SaveAlgResult" : "1"
}


public static bool SaveAlg(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSave = new SaveAlg()
    {
        tAlg = new AlgId() { id = moniker }
    };
    //Сохранение экземпляра алгоритма расчёта показателей
    var result = somClient.SaveAlg(tSave);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
