# GetDeclarationBlock: Операция

GetDeclarationBlock: Операция
-


**


# GetDeclarationBlock


## Синтаксис


GetDeclarationResult GetDeclarationBlock(OdId tObject,
 GetDeclarationBlockArg tArg)


## Параметры


tObject. Моникёр
 модуля или сборки.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDeclarationBlock
 используется для навигации по коду.


## Комментарии


Операция позволяет получить информацию о глобальных членах и типах,
 реализованных в коде, а также о локальных членах, реализованных внутри
 пространств имён, классов, интерфейсов. Для выполнения операции укажите
 в параметре tObject моникёр объекта
 репозитория, являющегося модулем или сборкой. Моникёр объекта может быть
 получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).
 В параметре tArg.path укажите
 наименование типа, для которого необходимо получить информацию о локальных
 членах. Если tArg.path не задан,
 то будет получена информация о глобальных членах и типах.


## Пример


Ниже приведён пример использования операции GetDeclarationBlock
 для получения информации о членах указанного класса. В запросе передаётся
 моникёр модуля в репозитории и наименование класса. В ответе приходит
 информация о членах класса. В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDeclarationBlock xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172002</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <path>TestObject</path>  </tArg>
  </GetDeclarationBlock>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDeclarationBlockResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<result xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>_arr</name>  <typeName>Array</typeName>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>5</col>  <row>2</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>19</col>  <row>2</row>  </endPoint>
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>Create</name>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>4</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>27</col>  <row>7</row>  </endPoint>
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>CreateWithParams</name>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>9</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>37</col>  <row>15</row>  </endPoint>
[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <name>DefaultValue</name>  <typeName>Double</typeName>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>9</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>37</col>  <row>15</row>  </endPoint>
  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <name>Size</name>  <typeName>Integer</typeName>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>9</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>37</col>  <row>15</row>  </endPoint>
  </it>
  </blocks>
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>Run</name>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>17</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>16</col>  <row>20</row>  </endPoint>
  <isShared>0</isShared>  </it>
  </result>
  </GetDeclarationBlockResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDeclarationBlock" :
  {
   "tObject" :
    {
     "id" : "S1!M!172002"
    },
   "tArg" :
    {
     "path" : "TestObject"
    }
  }
}

### JSON-ответ:


{
 "GetDeclarationBlockResult" :
  {
   "result" :
    {
     "it" :
      [
        {
         "type" : "Var",
         "moduleName" : "M_ADDITIONAL",
         "name" : "_arr",
         "typeName" : "Array",
         "access" : "Private",
         "beginPoint" :
          {
           "col" : "5",
           "row" : "2"
          },
         "endPoint" :
          {
           "col" : "19",
           "row" : "2"
          },
         "isShared" : "0"
        },
        {
         "type" : "Sub",
         "moduleName" : "M_ADDITIONAL",
         "name" : "Create",
         "access" : "Public",
         "beginPoint" :
          {
           "col" : "12",
           "row" : "4"
          },
         "endPoint" :
          {
           "col" : "27",
           "row" : "7"
          },
         "isShared" : "0"
        },
        {
         "type" : "Sub",
         "moduleName" : "M_ADDITIONAL",
         "name" : "CreateWithParams",
         "access" : "Public",
         "beginPoint" :
          {
           "col" : "12",
           "row" : "9"
          },
         "endPoint" :
          {
           "col" : "37",
           "row" : "15"
          },
         "blocks" :
          {
           "it" :
            [
              {
               "type" : "Var",
               "name" : "DefaultValue",
               "typeName" : "Double",
               "access" : "Public",
               "beginPoint" :
                {
                 "col" : "12",
                 "row" : "9"
                },
               "endPoint" :
                {
                 "col" : "37",
                 "row" : "15"
                }
              },
              {
               "type" : "Var",
               "name" : "Size",
               "typeName" : "Integer",
               "access" : "Public",
               "beginPoint" :
                {
                 "col" : "12",
                 "row" : "9"
                },
               "endPoint" :
                {
                 "col" : "37",
                 "row" : "15"
                }
              }
            ]
          },
         "isShared" : "0"
        },
        {
         "type" : "Sub",
         "moduleName" : "M_ADDITIONAL",
         "name" : "Run",
         "access" : "Public",
         "beginPoint" :
          {
           "col" : "12",
           "row" : "17"
          },
         "endPoint" :
          {
           "col" : "16",
           "row" : "20"
          },
         "isShared" : "0"
        }
      ]
    }
  }
}


public static GetDeclarationResult GetDeclarationBlock(MbId mb, string objId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDeclarationBlock()
    {
        tArg = new GetDeclarationBlockArg()
        {
            path = "TestObject"
        },
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, objId).k }
    };
    //Получение информации о дочерних членах класса
    var result = somClient.GetDeclarationBlock(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
