# OpenCube: Операция

OpenCube: Операция
-


**


# OpenCube


## Синтаксис


GetCubeResult OpenCube(OdId tOb, OpenCubeArg tArg)


## Параметры


tOb. Моникёр объекта, являющегося
 кубом.


tArg. Параметры открытия куба.


## Описание


Операция OpenCube открывает
 куб репозитория и возвращает контекст для работы со структурой куба.


## Комментарии


Операция позволяет получить доступ к структуре и настройкам различных
 кубов репозитория. Для выполнения операции укажите в поле tOb
 моникёр объекта, являющегося кубом, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm).
 В поле tArg.metaGet указывается
 шаблон, в соответствии с которым будут извлекаться метаданные куба при
 открытии. Если поле tArg.metaGet
 не задано, то результатом работы операции будет только моникёр открытого
 экземпляра куба.


Дальнейшая работа со структурой куба осуществляется с помощью операций
 [GetCube](GetCube.htm) и [SetCube](SetCube.htm). Для закрытия экземпляра
 куба используйте операцию [CloseCube](CloseCube.htm).


## Пример


Ниже приведён пример открытия структуры куба на редактирование. В запросе
 передаётся моникёр объекта репозитория, являющегося кубом. В ответе возвращается
 моникёр открытого экземпляра куба.


В примере C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	SOAP JSON
	 C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenCube xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>DJIDPDNFAJIEGOAEFGBFAIAOIJBNELFEKJMNBFEFGMEEHCKG!M!5857</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenCube>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenCubeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>DJIDPDNFAJIEGOAEFGBFAIAOIJBNELFEKJMNBFEFGMEEHCKG!M!S!CJFAIFLNFAJIEGOAENFOLPMFKLFMJJPPEOLLHBIJJMKBKEMCM</id>  </id>
  </OpenCubeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenCube" :
  {
   "tOb" :
    {
     "id" : "DJIDPDNFAJIEGOAEFGBFAIAOIJBNELFEKJMNBFEFGMEEHCKG!M!5857"
    },
   "tArg" :
    {
     "args" :
      {
       "bind" : "true",
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenCubeResult" :
  {
   "id" :
    {
     "id" : "DJIDPDNFAJIEGOAEFGBFAIAOIJBNELFEKJMNBFEFGMEEHCKG!M!S!CJFAIFLNFAJIEGOAENFOLPMFKLFMJJPPEOLLHBIJJMKBKEMCM"
    }
  }
}


public static GetCubeResult OpenCube(MbId mb, string cubeId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenCube()
    {
        tArg = new OpenCubeArg()
        {
            args = new CubeOpenArgs()
            {
                bind = true,
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, cubeId).k }
    };
    // Открытие куба
    var tResult = somClient.OpenCube(tOpen);
    return tResult;
}


См. также:


[Работа с
 кубами](Cube_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
