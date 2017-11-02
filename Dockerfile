FROM willsonic/ws-node-alpine:v1.0.0


COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

RUN npm run build --production

CMD ./node_modules/.bin/serve -s tmp/build
EXPOSE 5000