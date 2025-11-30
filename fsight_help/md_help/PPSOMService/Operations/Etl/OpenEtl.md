# OpenEtl: Операция

OpenEtl: Операция
-


**


# OpenEtl


## Синтаксис


OpenEtlResult OpenEtl(OdId tOb, OpenEtlArg tArg)


## Параметры


tOb. Моникёр объекта репозитория,
 являющегося задачей ETL.


tArg. Параметры открытия задачи
 ETL.


## Описание


Операция OpenEtl открывает задачу
 ETL и возвращает моникёр, необходимый для дальнейшей работы с объектами
 задачи.


## Комментарии


Для выполнения операции необходимо в параметре tOb
 указать моникёр объекта, являющегося задачей ETL, а в параметре tArg указать параметры открытия.
 Метаданные задачи ETL, необходимые для формирования моникера, могут быть
 получены при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В параметре tArg могут быть указаны
 режим открытия задачи (просмотр или редактирование) и шаблон для извлечения
 метаданных. В шаблоне указывается та информация, которая должна быть получена
 при выполнении операции.


Результатом работы операции будет моникёр открытого экземпляра задачи
 ETL, а также метаданные, если при выполнении операции было определено
 поле tArg.metaGet. Дальнейшая
 работа с открытым задачей осуществляется с помощью операций [GetEtl](GetEtl.htm) и [SetEtl](SetEtl.htm). Для закрытия открытого экземпляра
 задачи ETL используйте операцию [CloseEtl](CloseEtl.htm).


## Пример


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenEtl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!7012</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <bind>true</bind>  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenEtl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenEtlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!L1</id>  </id>
  </OpenEtlResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "OpenEtl" :
  {
   "tOb" :
    {
     "id" : "S1!M!7012"
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
 "OpenEtlResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!L1"
    }
  }
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Указанная ниже функция OpenETL
	 открывает задачу ETL. Моникёр соединения с репозиторием и идентификатор
	 задачи передаются в качестве входных параметров. В примере используется
	 функция FindObjectById, код
	 которой приведен в примере «[Получение
	 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения
	 операции является результатом выполнения функции.


public static OpenEtlResult OpenETL(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenEtl()
    {
        tArg = new OpenEtlArg()
        {
            args = new EtlOpenArgs()
            {
                bind = true,
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие задачи ETL
    var tResult = somClient.OpenEtl(tOpen);
    return tResult;
}


См. также:


[Работа с
 задачей ETL](Etl_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
