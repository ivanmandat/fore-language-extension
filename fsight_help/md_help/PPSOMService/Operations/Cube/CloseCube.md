# CloseCube: Операция

CloseCube: Операция
-


**


# CloseCube


## Синтаксис


bool CloseCube(CubeId tCube)


## Параметры


tCube. Моникёр открытого экземпляра
 куба.


## Описание


Операция CloseCube закрывает
 экземпляр открытого куба и возвращает признак удачного закрытия.


## Комментарии


Для выполнения операции необходимо в параметре tCube
 указать моникёр экземпляра куба, который необходимо закрыть. Результатом
 операции будет логическое значение true, если закрытие завершилось успешно.


## Пример


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tCube xmlns="****">
  <id>S1!M!S!C1</id>  </tCube>
  </CloseCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseCubeResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseCube" :
  {
   "tCube" :
    {
     "id" : "S1!M!S!C1"
    }
  }
}

### JSON-ответ:


{
 "CloseCubeResult" : "1"
}


public static bool CloseCube(CubeId cube)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseCube()
    {
        tCube = cube
    };
    //Закрытие экземпляра куба
    var b = somClient.CloseCube(tClose);
    return b;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
