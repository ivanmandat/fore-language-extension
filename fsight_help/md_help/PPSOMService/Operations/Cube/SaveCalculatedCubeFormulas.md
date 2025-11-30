# SaveCalculatedCubeFormulas: Операция

SaveCalculatedCubeFormulas: Операция
-


**


# SaveCalculatedCubeFormulas


## Синтаксис


bool SaveCalculatedCubeFormulas(CubeId tCube)


## Параметры


tCube. Моникёр
 открытого экземпляра вычисляемого куба.


## Описание


Операция SaveCalculatedCubeFormulas
 сохраняет изменения в формулах вычисляемого куба.


## Комментарии


Для выполнения операции укажите в поле tCube
 моникёр экземпляра вычисляемого куба. Моникёр можно получить с помощью
 операции [OpenCube](OpenCube.htm). Работа с формулами осуществляется
 с помощью операций [GetCalculatedCubeFormulas](GetCalculatedCubeFormulas.htm)/[SetCalculatedCubeFormulas](SetCalculatedCubeFormulas.htm).


Результатом операции будет логическое значение true,
 если сохранение изменений завершилось успешно.


## Пример


Ниже приведён пример сохранения формул вычисляемого куба. В запросе
 передаётся моникёр экземпляра вычисляемого куба, для которого изменялись
 формулы. В ответе приходит признак удачного сохранения формул.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveCalculatedCubeFormulas xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
  </SaveCalculatedCubeFormulas>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SaveCalculatedCubeFormulasResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SaveCalculatedCubeFormulasResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveCalculatedCubeFormulas" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    }
  }
}

### JSON-ответ:


{
 "SaveCalculatedCubeFormulasResult" : "1"
}


public static bool SaveCubeFormulas(CubeId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSave = new SaveCalculatedCubeFormulas()
    {
        tCube = moniker
    };
    //Сохранение формул вычисляемого куба
    var result = somClient.SaveCalculatedCubeFormulas(tSave);
    return result;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
