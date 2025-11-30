# GetDeclarationPoint: Операция

GetDeclarationPoint: Операция
-


**


# GetDeclarationPoint


## Синтаксис


GetDeclarationPointResult GetDeclarationPoint(OdId
 tObject, GetDeclarationPointArg tArg)


## Параметры


tObject. Моникёр
 модуля, метаданные которого необходимо получить.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDeclarationPoint
 получает информацию об элементе среды разработки, на котором установлен
 курсор.


## Комментарии


Операция позволяет получить информацию о функции или процедуре, если
 используется пользовательский метод, или о свойстве, методе, интерфейсе,
 классе, если используется системная сборка. Для выполнения операции укажите
 в поле tObject моникёр модуля,
 а в поле tArg.cursor координаты
 расположения курсора в коде.


Результатом операции будет информация об элементе среды разработки,
 на котором установлен курсор.


## Пример


Ниже приведён пример получения информации об интерфейсе среды разработки.
 В запросе передаётся моникёр модуля и индексы строки и столбца, по которым
 расположен курсор. В ответе возвращается наименование сборки и интерфейса.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDeclarationPoint xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!231517</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cursor>
  <col>11</col>  <row>5</row>  </cursor>
  </tArg>
  </GetDeclarationPoint>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDeclarationPointResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <moduleName xmlns="****">Express</moduleName>  <className xmlns="****" />
  <identName xmlns="****">IEaxAnalyzerOptions</identName>  </GetDeclarationPointResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDeclarationPoint" :
  {
   "tObject" :
    {
     "id" : "S1!M!231517"
    },
   "tArg" :
    {
     "cursor" :
      {
       "col" : "11",
       "row" : "5"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDeclarationPointResult" :
  {
   "moduleName" : "Express",
   "className" : "",
   "identName" : "IEaxAnalyzerOptions"
  }
}


public static GetDeclarationPointResult GetDeclarationPoint(MbId mb, string moduleId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tGet = new GetDeclarationPoint()
        {
            tArg = new GetDeclarationPointArg()
            {
                cursor = new CodePoint()
                {
                    row = 5,
                    col = 11
                }
            },
            //Формирование моникёра объекта
            tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, moduleId).k }
        };
        //Запустить сборку
        var result = somClient.GetDeclarationPoint(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
