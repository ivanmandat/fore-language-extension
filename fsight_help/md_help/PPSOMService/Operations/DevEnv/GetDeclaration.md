# GetDeclaration: Операция

GetDeclaration: Операция
-


**


# GetDeclaration


## Синтаксис


GetDeclarationResult GetDeclaration(OdId tObject,
 GetDeclarationArg tArg)


## Параметры


tObject. Моникёр
 объекта среды разработки.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDeclaration используется
 для работы с инспектором кода.


## Комментарии


Операция используется при работе с модулями. Операция позволяет получить
 информацию из инспектора кода, в котором содержится список всех членов
 и типов, реализованных в модуле/сборке. Для выполнения операции укажите
 в параметре tObject моникёр объекта
 репозитория, являющегося модулем или сборкой. Моникёр объекта может быть
 получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


## Пример


Ниже приведён пример использования операции GetDeclaration
 для получения информации о членах и типах, реализованных в модуле. В запросе
 передаётся моникёр модуля в репозитории. В ответе приходит информация
 о членах и типах. В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDeclaration xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!172002</id>  </tObject>
  <tArg xmlns="****" />
  </GetDeclaration>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDeclarationResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<result xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>Module</type>  <name>Collections</name>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>0</col>  <row>0</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>0</col>  <row>0</row>  </endPoint>
  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Module</type>  <name>Cubes</name>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>0</col>  <row>0</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>0</col>  <row>0</row>  </endPoint>
  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Module</type>  <name>Metabase</name>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>0</col>  <row>0</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>0</col>  <row>0</row>  </endPoint>
  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Module</type>  <name>System</name>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>0</col>  <row>0</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>0</col>  <row>0</row>  </endPoint>
  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>Main</name>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>1</col>  <row>23</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>13</col>  <row>30</row>  </endPoint>
[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>obj</name>  <typeName>TestObject</typeName>  <access>Private</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>5</col>  <row>25</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>20</col>  <row>25</row>  </endPoint>
  <isShared>0</isShared>  </it>
  </blocks>
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Class</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>TestObject</name>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>8</col>  <row>1</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>21</col>  <row>21</row>  </endPoint>
[![](../../minus.gif)](../../#)<blocks>
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
  <blocks />
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>CreateWithParams</name>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>9</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>37</col>  <row>15</row>  </endPoint>
[![](../../minus.gif)](../../#)<blocks>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>DefaultValue</name>  <typeName>Double</typeName>  <Value>0</Value>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>56</col>  <row>9</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>80</col>  <row>9</row>  </endPoint>
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Var</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>Size</name>  <typeName>Integer</typeName>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>41</col>  <row>9</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>54</col>  <row>9</row>  </endPoint>
  <isShared>0</isShared>  </it>
  </blocks>
  <isShared>0</isShared>  </it>
[![](../../minus.gif)](../../#)<it>
  <type>Sub</type>  <moduleName>M_ADDITIONAL</moduleName>  <name>Run</name>  <access>Public</access>[![](../../minus.gif)](../../#)<beginPoint>
  <col>12</col>  <row>17</row>  </beginPoint>
[![](../../minus.gif)](../../#)<endPoint>
  <col>16</col>  <row>20</row>  </endPoint>
  <blocks />
  <isShared>0</isShared>  </it>
  </blocks>
  </it>
  </result>
  </GetDeclarationResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDeclaration" :
  {
   "tObject" :
    {
     "id" : "S1!M!172002"
    },
   "tArg" : ""
  }
}

### JSON-ответ:


{
 "GetDeclarationResult" :
  {
   "result" :
    {
     "it" :
      [
        {
         "type" : "Module",
         "name" : "Collections",
         "access" : "Private",
         "beginPoint" :
          {
           "col" : "0",
           "row" : "0"
          },
         "endPoint" :
          {
           "col" : "0",
           "row" : "0"
          }
        },
        {
         "type" : "Module",
         "name" : "Cubes",
         "access" : "Private",
         "beginPoint" :
          {
           "col" : "0",
           "row" : "0"
          },
         "endPoint" :
          {
           "col" : "0",
           "row" : "0"
          }
        },
        {
         "type" : "Module",
         "name" : "Metabase",
         "access" : "Private",
         "beginPoint" :
          {
           "col" : "0",
           "row" : "0"
          },
         "endPoint" :
          {
           "col" : "0",
           "row" : "0"
          }
        },
        {
         "type" : "Module",
         "name" : "System",
         "access" : "Private",
         "beginPoint" :
          {
           "col" : "0",
           "row" : "0"
          },
         "endPoint" :
          {
           "col" : "0",
           "row" : "0"
          }
        },
        {
         "type" : "Sub",
         "moduleName" : "M_ADDITIONAL",
         "name" : "Main",
         "access" : "Private",
         "beginPoint" :
          {
           "col" : "1",
           "row" : "23"
          },
         "endPoint" :
          {
           "col" : "13",
           "row" : "30"
          },
         "blocks" :
          {
           "it" :
            {
             "type" : "Var",
             "moduleName" : "M_ADDITIONAL",
             "name" : "obj",
             "typeName" : "TestObject",
             "access" : "Private",
             "beginPoint" :
              {
               "col" : "5",
               "row" : "25"
              },
             "endPoint" :
              {
               "col" : "20",
               "row" : "25"
              },
             "isShared" : "0"
            }
          },
         "isShared" : "0"
        },
        {
         "type" : "Class",
         "moduleName" : "M_ADDITIONAL",
         "name" : "TestObject",
         "access" : "Public",
         "beginPoint" :
          {
           "col" : "8",
           "row" : "1"
          },
         "endPoint" :
          {
           "col" : "21",
           "row" : "21"
          },
         "blocks" :
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
               "blocks" : "",
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
                     "moduleName" : "M_ADDITIONAL",
                     "name" : "DefaultValue",
                     "typeName" : "Double",
                     "Value" : "0",
                     "access" : "Public",
                     "beginPoint" :
                      {
                       "col" : "56",
                       "row" : "9"
                      },
                     "endPoint" :
                      {
                       "col" : "80",
                       "row" : "9"
                      },
                     "isShared" : "0"
                    },
                    {
                     "type" : "Var",
                     "moduleName" : "M_ADDITIONAL",
                     "name" : "Size",
                     "typeName" : "Integer",
                     "access" : "Public",
                     "beginPoint" :
                      {
                       "col" : "41",
                       "row" : "9"
                      },
                     "endPoint" :
                      {
                       "col" : "54",
                       "row" : "9"
                      },
                     "isShared" : "0"
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
               "blocks" : "",
               "isShared" : "0"
              }
            ]
          }
        }
      ]
    }
  }
}


public static GetDeclarationResult GetDeclaration(MbId mb, string objId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDeclaration()
    {
        tArg = new GetDeclarationArg(),
        //Формирование моникёра объекта
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, objId).k }
    };
    //Получение информации из инспектора кода
    var result = somClient.GetDeclaration(tGet);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
